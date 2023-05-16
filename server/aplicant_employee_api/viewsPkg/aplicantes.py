from django.shortcuts import render
from rest_framework import viewsets

from ..serializers.aplicantes import AplicantesSerializer

from ..models import Aplicantes


# Create your views here.

class AplicantesViews (viewsets.ModelViewSet):
    serializer_class = AplicantesSerializer  # renderiza JSON
    queryset = Aplicantes.objects.all()  # Obtiene todos los registros
