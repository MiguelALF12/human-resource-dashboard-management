from django.shortcuts import render
import io
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.documentosAplicantes import DocumentosAplicantesSerializer
from ..serializers.tipoDocumento import TipoDocumentoSerializer

from ..models import DocumentosAplicantes, Aplicantes


class DocumentosAplicantesViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = DocumentosAplicantesSerializer
    queryset = DocumentosAplicantes.objects.all()

        
    @action(detail=False, methods=['post'])
    def load_files(self, request):
        # Aquí solo llegan los 8 documentos de cargue iniciales
        files = request.data
        belongsToUserWithCedula = files['cedula']
        aplicant = list(Aplicantes.objects.filter(cedula=belongsToUserWithCedula))
        listOfFiles = list(files.items())[1:] 
        for file in listOfFiles[1:]:
            serializer = self.get_serializer(data={'idAplicante':aplicant[0].id , 'idTipo':listOfFiles.index(file) , 'archivo':file[1]})
            print("Aplicante a registrar ", serializer.initial_data)
            if serializer.is_valid():
                serializer.save()
            #TODO: Falta entender como anexar la FK de Aplicantes (es id propio de django) y resolver
            # la situación con indicies de cada files[file]
        return Response("Nais")
    
    def post(self, request, format=None):
        uploadedFile = request.FILES['file']
        filename = '/tmp/myfile'
        with open(filename, 'wb+') as temp_file:
            for chunk in uploadedFile.chunks():
                temp_file.write(chunk)

        temp_file.close()
