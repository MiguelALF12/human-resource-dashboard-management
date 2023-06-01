from rest_framework import viewsets

from ..serializers.seleccionados import SeleccionadosSerializer

from ..models.seleccionados import Seleccionados
# Create your views here.

class SeleccionadosViews (viewsets.ModelViewSet):
    serializer_class = SeleccionadosSerializer  # renderiza JSON
    queryset = Seleccionados.objects.all()  # Obtiene todos los registros