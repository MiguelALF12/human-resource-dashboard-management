from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.contratos import ContratosSerializer
from ..models.contratos import Contratos


class ContratosViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = ContratosSerializer
    queryset = Contratos.objects.all()