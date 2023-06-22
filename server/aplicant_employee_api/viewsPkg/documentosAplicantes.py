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

from utilities.variousFunctions import zipFiles

class DocumentosAplicantesViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = DocumentosAplicantesSerializer
    queryset = DocumentosAplicantes.objects.all()

        
    @action(detail=False, methods=['post'])
    def load_files(self, request):
        files = request.data
        belongsToUserWithCedula = files['cedula']
        aplicant = Aplicantes.objects.get(cedula=belongsToUserWithCedula)
        listOfFiles = list(files.items())[1:]
        for file in listOfFiles:
            fileType = TipoDocumento.objects.get(tipo=file[0])
            serializer = self.get_serializer(data={'idAplicante':aplicant.id , 'idTipo':fileType.id , 'archivo':file[1]})
            if serializer.is_valid():
                serializer.save()
        return Response(data={}, status=status.HTTP_201_CREATED)
    
    @action(detail=True)
    def get_documents_per_user(self, request, pk=None):
        documentsModels = list(DocumentosAplicantes.objects.filter(idAplicante = pk))
        documents = [documentObject.archivo for documentObject in documentsModels]
        filesInZip = zipFiles(documents)
        filesInZip.seek(0)
        print("\n\n")
        return FileResponse(filesInZip, as_attachment=True)

    @action(detail=True, methods=['put'])
    def update_files(self, request, pk=None):
        files = request.data
        listOfFiles = list(files.items())
        if len(listOfFiles) > 0: 
            for file in listOfFiles:
                fileType = TipoDocumento.objects.get(tipo=file[0])
                oldFile = DocumentosAplicantes.objects.get(idAplicante = pk, idTipo=fileType)
                serializer = self.get_serializer(oldFile,data={'idAplicante':pk, 'idTipo':fileType.id , 'archivo':file[1]})
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
        return Response({}, status=status.HTTP_201_CREATED)
        

    def post(self, request, format=None):
        uploadedFile = request.FILES['file']
        filename = '/tmp/myfile'
        with open(filename, 'wb+') as temp_file:
            for chunk in uploadedFile.chunks():
                temp_file.write(chunk)
        temp_file.close()

    