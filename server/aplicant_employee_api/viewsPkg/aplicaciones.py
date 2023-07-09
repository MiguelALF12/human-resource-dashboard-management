from rest_framework import viewsets
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

from ..serializers.aplicaciones import AplicacionesSerializer

from ..models.aplicaciones import Aplicaciones
from ..models.seleccionados import Seleccionados
# Create your views here.

class AplicacionesViews (viewsets.ModelViewSet):
    serializer_class = AplicacionesSerializer  # renderiza JSON
    queryset = Aplicaciones.objects.all()  # Obtiene todos los registros
    parser_classes = (MultiPartParser, FormParser,JSONParser)

    def create(self, request):    
        try:
            Aplicaciones.objects.get(idAplicante=request.data["idAplicante"], idOferta=request.data["idOferta"])
            print("Oferta existe")
            return Response(data={'aplicationExists': True}, status=status.HTTP_200_OK)
        except Aplicaciones.DoesNotExist:
            print("Oferta no existe")
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid()
            self.perform_create(serializer=serializer)    
            return Response(data={'aplicationExists': False}, status=status.HTTP_200_OK)

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(data=queryset, many=True)
        serializer.is_valid()
        detailedUserInAplications = {} #{"offerId": {Aplicante.as_object}}
        for aplication in self.get_queryset():
            isAplicationSelected = Seleccionados.objects.filter(idAplicacion=aplication.id)
            if len(isAplicationSelected) == 0:
                if aplication.idOferta.id in detailedUserInAplications.keys():
                    detailedUserInAplications[aplication.idOferta.id].append(aplication.idAplicante.as_object)
                else:
                    detailedUserInAplications[aplication.idOferta.id] = [aplication.idAplicante.as_object]
        return Response(data=[detailedUserInAplications,serializer.data] , status=status.HTTP_200_OK)

    @action(detail=True)
    def get_aplications_by_aplicantId(self, request, pk=None):
        aplications = Aplicaciones.objects.filter(idAplicante=pk)
        aplicationsInDetail = []
        for aplication in aplications:
            aplicationsInDetail.append(
                {
                    "id":aplication.id,
                    "idAplicante": aplication.idAplicante.id,
                    "idOferta": aplication.idOferta.id,
                    "oferta": aplication.idOferta.as_object
                }
            )
        return Response(data=aplicationsInDetail, status=status.HTTP_200_OK)

    @action(detail=True, methods=["DELETE"])
    def deleteAplicationsOnceGettingSelected(self, request, pk=None):
        selectedAplication = request.data
        aplications = Aplicaciones.objects.filter(idAplicante=pk).exclude(id=selectedAplication["idAplicacion"])        
        for aplication in aplications:
            aplication.delete()
        return Response(data="Sucesfully removed the rest of the aplications", status=status.HTTP_200_OK)

            


        
