from rest_framework import viewsets
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

from ..serializers.seleccionados import SeleccionadosSerializer

from ..models.seleccionados import Seleccionados
from ..models.aplicantes import Aplicantes
# Create your views here.

class SeleccionadosViews (viewsets.ModelViewSet):
    serializer_class = SeleccionadosSerializer  # renderiza JSON
    queryset = Seleccionados.objects.all()  # Obtiene todos los registros
    parser_classes = (MultiPartParser, FormParser,JSONParser)

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(data=queryset, many=True)
        serializer.is_valid()
        detailedSelectedAplicants = [] #{"AplicationId": {Aplicante.as_object}}
        for selection in self.get_queryset():
            aplicant = selection.idAplicacion.idAplicante.as_object
            aplicant["idSeleccion"] = selection.id
            aplicant["faseAplicante"] = selection.faseAplicante
            aplicant["nombreOferta"] = selection.idAplicacion.idOferta.nombre
            aplicant["descripcionOferta"] = selection.idAplicacion.idOferta.descripcion
            aplicant["fechaInicioOferta"] = selection.idAplicacion.idOferta.fechaInicio
            aplicant["experienciaAnosOferta"] = selection.idAplicacion.idOferta.experienciaAnos
            aplicant["salarioOferta"] = selection.idAplicacion.idOferta.salario
            detailedSelectedAplicants.append(aplicant) 
        
        return Response(data=detailedSelectedAplicants , status=status.HTTP_200_OK)