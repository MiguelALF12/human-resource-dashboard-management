from rest_framework import viewsets

from ..serializers.ofertas import OfertasSerializer
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

from ..models.ofertas import Ofertas
# Create your views here.

class OfertasViews (viewsets.ModelViewSet):
    serializer_class = OfertasSerializer  # renderiza JSON
    queryset = Ofertas.objects.all()  # Obtiene todos los registros
    parser_classes = (MultiPartParser, FormParser,JSONParser)

    def list(self, request):
        print("=========== ofertas.getOfertas() ===========\n")
        queryset = Ofertas.objects.exclude(estadoDisponibilidad="CERRADA")
        print(queryset)
        querysetAsObj = self.filter_queryset(queryset)
        serializer = self.get_serializer(data=querysetAsObj, many=True)
        serializer.is_valid()
        return Response(data=serializer.data, status=status.HTTP_200_OK)