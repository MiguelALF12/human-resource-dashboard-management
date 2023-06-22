from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.empleadoEnActividades import EmpleadosEnActividadesSerializer
from ..models.empleadoEnActividades import EmpleadosEnActividades

class EmpleadoEnActividadesViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = EmpleadosEnActividadesSerializer
    queryset = EmpleadosEnActividades.objects.all()