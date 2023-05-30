"""
#TODO: En operaciones de eliminar/actualizar arhcivos, eliminarlos/actualziarlos de la carpeta media
#
"""
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import BadRequest, MultipleObjectsReturned
from django.http import FileResponse
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.documentosAplicantes import DocumentosAplicantesSerializer
from ..models import DocumentosAplicantes, Aplicantes, TipoDocumento

from ..utilities.variousFunctions import zipFiles

class DocumentosAplicantesViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = DocumentosAplicantesSerializer
    queryset = DocumentosAplicantes.objects.all()

        
    @action(detail=False, methods=['post'])
    def load_files(self, request):
        print("=========== documentosAplicantes.load_files() ===========\n")
        # Aquí solo llegan los 9 documentos de cargue iniciales
        files = request.data
        belongsToUserWithCedula = files['cedula']
        aplicant = Aplicantes.objects.get(cedula=belongsToUserWithCedula)
        listOfFiles = list(files.items())[1:]
        print("\n\n")
        print("Lista de archvios a guardar: ", listOfFiles)
        print("\n\n")
        for file in listOfFiles:
            fileType = TipoDocumento.objects.get(tipo=file[0])
            print("Archivo y llave foranea ",file[0], fileType )
            print("\n\n")
            serializer = self.get_serializer(data={'idAplicante':aplicant.id , 'idTipo':fileType.id , 'archivo':file[1]})
            print("Información serializada antes de guardar en BD: ", serializer.initial_data)
            print("\n\n")
            if serializer.is_valid():
                serializer.save()
        print("=========================================================")
        return Response(data={}, status=status.HTTP_201_CREATED)
    
    @action(detail=True)
    def get_documents_per_user(self, request, pk=None):
        print("=========== documentosAplicantes.documents_per_user() ===========\n")
        print("ID del usuario que solicita sus documentos: ", pk)
        print("\n\n")
        documentsModels = list(DocumentosAplicantes.objects.filter(idAplicante = pk))
        print("\n\n")
        documents = [documentObject.archivo for documentObject in documentsModels]
        print("Documentos del usuario: ", documents)
        print("\n\n")
        filesInZip = zipFiles(documents)
        # print("Contenido de Zip: ", filesInZip)
        filesInZip.seek(0)
        # print(filesInZip.getvalue())
        print("=========================================================")
        print("\n\n")
        return FileResponse(filesInZip, as_attachment=True)

    @action(detail=True, methods=['put'])
    def update_files(self, request, pk=None):
        print("=========== documentosAplicantes.update_files() ===========\n")
        print("ID del usuario que solicita sus documentos: ", pk)
        print("\n\n")
        files = request.data
        listOfFiles = list(files.items())
        print("Lista de archivos a actualizar: ", listOfFiles)
        print("\n\n")
        for file in listOfFiles:
            fileType = TipoDocumento.objects.get(tipo=file[0])
            print("Archivo y llave foranea del nuevo archivo: ",file[1], fileType )
            print("\n\n")
            oldFile = DocumentosAplicantes.objects.get(idAplicante = pk, idTipo=fileType)
            serializer = self.get_serializer(oldFile,data={'idAplicante':pk, 'idTipo':fileType.id , 'archivo':file[1]})
            print("Documento antiguo: ", oldFile)
            print("(Serializable) nueva información: ", serializer.initial_data)
            print("\n\n")
            if serializer.is_valid(raise_exception=True):
                serializer.save()
        print("=========================================================")
        print("\n\n")
        return Response({}, status=status.HTTP_201_CREATED)
        

    def post(self, request, format=None):
        uploadedFile = request.FILES['file']
        filename = '/tmp/myfile'
        with open(filename, 'wb+') as temp_file:
            for chunk in uploadedFile.chunks():
                temp_file.write(chunk)

        temp_file.close()

    