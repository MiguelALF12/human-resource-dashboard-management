from rest_framework import viewsets
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status

from ..serializers.seleccionados import SeleccionadosSerializer

from ..models.seleccionados import Seleccionados
from ..models.aplicantes import Aplicantes
from ..models.aplicaciones import Aplicaciones
# Create your views here.

class SeleccionadosViews (viewsets.ModelViewSet):
    serializer_class = SeleccionadosSerializer  # renderiza JSON
    queryset = Seleccionados.objects.all()  # Obtiene todos los registros
    parser_classes = (MultiPartParser, FormParser,JSONParser)

    def create(self, request):
        try:
            Seleccionados.objects.get(idAplicacion=request.data["idAplicacion"], faseAplicante=request.data["faseAplicante"])
            print("Oferta existe")
            return Response(data={'selectionExists': True}, status=status.HTTP_200_OK)
        except Seleccionados.DoesNotExist:
            print("Oferta no existe")
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid()
            self.perform_create(serializer=serializer)     
            return Response(data={'selectionExists': False}, status=status.HTTP_200_OK)

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(data=queryset, many=True)
        serializer.is_valid()
        detailedSelectedAplicants = [] #{"AplicationId": {Aplicante.as_object}}
        for selection in self.get_queryset():
            aplicant = selection.idAplicacion.idAplicante.as_object
            aplicant["idSeleccion"] = selection.id
            aplicant["idAplicacion"] = selection.idAplicacion.id
            aplicant["faseAplicante"] = selection.faseAplicante
            aplicant["nombreOferta"] = selection.idAplicacion.idOferta.nombre
            aplicant["descripcionOferta"] = selection.idAplicacion.idOferta.descripcion
            aplicant["fechaInicioOferta"] = selection.idAplicacion.idOferta.fechaInicio
            aplicant["experienciaAnosOferta"] = selection.idAplicacion.idOferta.experienciaAnos
            aplicant["salarioOferta"] = selection.idAplicacion.idOferta.salario
            detailedSelectedAplicants.append(aplicant) 
        
        return Response(data=detailedSelectedAplicants , status=status.HTTP_200_OK)
    
    def destroy(self, request, pk=None):
        try:
            selection = Seleccionados.objects.get(id=pk)
            Aplicaciones.objects.get(id=selection.idAplicacion.id).delete()
            selection.delete()
            return Response(data="", status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(data={"Object":"Not exists"} , status=status.HTTP_404_NOT_FOUND)