from django.shortcuts import render
from rest_framework import viewsets

from .serializers.aplicantes import AplicantesSerializer
from .serializers.ofertas import OfertasSerializer
from .serializers.aplicaciones import AplicacionesSerializer
from .serializers.seleccionados import SeleccionadosSerializer
from .serializers.tipoDocumento import TipoDocumentoSerializer
from .serializers.documentosAplicantes import DocumentosAplicantes

from .models import Aplicantes, Ofertas, Aplicaciones, Seleccionados, DocumentosAplicantes, TipoDocumento


# Create your views here.

class OfertasViews(viewsets.ModelViewSet):
    serializer_class = OfertasSerializer
    queryset = Ofertas.objects.all()


class AplicacioneViews(viewsets.ModelViewSet):
    serializer_class = AplicacionesSerializer
    queryset = Aplicaciones.objects.all()


class SeleccionadosViews(viewsets.ModelViewSet):
    serializer_class = SeleccionadosSerializer
    queryset = Seleccionados.objects.all()


class TipoDocumentoViews(viewsets.ModelViewSet):
    serializer_class = TipoDocumentoSerializer
    queryset = TipoDocumento.objects.all()
