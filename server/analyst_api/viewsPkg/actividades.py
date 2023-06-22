from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.actividades import ActividadesSerializer
from ..models.actividades import Actividades

class ActividadesViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = ActividadesSerializer
    queryset = Actividades.objects.all()