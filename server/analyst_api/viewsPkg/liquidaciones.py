from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.liquidaciones import LiquidacionesSerializer
from ..models.liquidaciones import Liquidaciones

class LiquidacionesViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class =LiquidacionesSerializer
    queryset = Liquidaciones.objects.all()