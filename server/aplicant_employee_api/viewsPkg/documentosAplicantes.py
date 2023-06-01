"""
#TODO: Mirar el siguiente link para mejorar el insertado de llaves foraneas: https://docs.djangoproject.com/en/4.2/topics/db/queries/#saving-foreignkey-and-manytomanyfield-fields

"""
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.documentosAplicantes import DocumentosAplicantesSerializer

from ..models import DocumentosAplicantes, Aplicantes, TipoDocumento


class DocumentosAplicantesViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = DocumentosAplicantesSerializer
    queryset = DocumentosAplicantes.objects.all()

        
    @action(detail=False, methods=['post'])
    def load_files(self, request):
        print("=========== documentosAplicantes.load_files() ===========\n")
        # Aquí solo llegan los 8 documentos de cargue iniciales
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
            print("Aplicante a registrar ", serializer.initial_data)
            if serializer.is_valid():
                serializer.save()
        print("=========================================================")
        return Response("Nais")
    
    def post(self, request, format=None):
        uploadedFile = request.FILES['file']
        filename = '/tmp/myfile'
        with open(filename, 'wb+') as temp_file:
            for chunk in uploadedFile.chunks():
                temp_file.write(chunk)

        temp_file.close()
