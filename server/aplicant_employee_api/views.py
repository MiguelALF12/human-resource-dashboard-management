from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers.aplicantes import AplicantesSerializer
from .serializers.ofertas import OfertasSerializer
from .serializers.aplicaciones import AplicacionesSerializer
from .serializers.seleccionados import SeleccionadosSerializer
from .serializers.tipoDocumento import TipoDocumentoSerializer
from .serializers.documentosAplicantes import DocumentosAplicantes

from .models import Aplicantes, Ofertas, Aplicaciones, Seleccionados, DocumentosAplicantes, TipoDocumento



# Create your views here.

class AplicantesViews (viewsets.ModelViewSet):
    serializer_class = AplicantesSerializer  # renderiza JSON
    queryset = Aplicantes.objects.all()  # Obtiene todos los registros

class OfertasViews(viewsets.ModelViewSet):
    serializer_class = OfertasSerializer
    queryset = Ofertas.objects.all()

class AplicacioneViews(viewsets.ModelViewSet):
    serializer_class = AplicacionesSerializer
    queryset = Aplicaciones.objects.all()

class SeleccionadosViews(viewsets.ModelViewSet):
    serializer_class=SeleccionadosSerializer
    queryset = Seleccionados.objects.all()

class TipoDocumentoViews(viewsets.ModelViewSet):
    serializer_class=TipoDocumentoSerializer
    queryset = TipoDocumento.objects.all()

class DocumentosAplicantesViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser,)
    serializer_class=DocumentosAplicantes
    queryset = DocumentosAplicantes.objects.all()

    def post(self, request, format=None):
        uploadedFile = request.FILES['file']
        filename = '/tmp/myfile'
        with open(filename, 'wb+') as temp_file:
            for chunk in uploadedFile.chunks():
                temp_file.write(chunk)

        temp_file.close()
