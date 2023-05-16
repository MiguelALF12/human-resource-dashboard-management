from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from ..serializers.documentosAplicantes import DocumentosAplicantesSerializer

from ..models import DocumentosAplicantes


class DocumentosAplicantesViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser,)
    serializer_class = DocumentosAplicantesSerializer
    queryset = DocumentosAplicantes.objects.all()

    @action(detail=False, methods=['post'])
    def load_files(self, request):
        files = request.FILES['files']
        if len(files) >= 8:
            for file in range(files):
                serializer = self.get_serializer(files[file])
                serializer.is_valid(raise_exception=True)
                #TODO: Falta entender como anexar la FK de Aplicantes (es id propio de django) y resolver
                # la situación con indicies de cada files[file]


            
        pass
    def post(self, request, format=None):
        uploadedFile = request.FILES['file']
        filename = '/tmp/myfile'
        with open(filename, 'wb+') as temp_file:
            for chunk in uploadedFile.chunks():
                temp_file.write(chunk)

        temp_file.close()
