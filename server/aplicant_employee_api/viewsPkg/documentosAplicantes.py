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
        print(request.data)
        # if len(files) >= 1:
        #     for file in files:
        #         serializer = self.get_serializer(data=file)
        #         serializer.is_valid(raise_exception=True)
        #         print(serializer)
        #         # uploadedFile = DocumentosAplicantes(serializer)
        #         #TODO: Falta entender como anexar la FK de Aplicantes (es id propio de django) y resolver
        #         # la situación con indicies de cada files[file]
        return Response("Nais")
    def post(self, request, format=None):
        uploadedFile = request.FILES['file']
        filename = '/tmp/myfile'
        with open(filename, 'wb+') as temp_file:
            for chunk in uploadedFile.chunks():
                temp_file.write(chunk)

        temp_file.close()
