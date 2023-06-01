from rest_framework import viewsets
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

from ..serializers.aplicaciones import AplicacionesSerializer

from ..models.aplicaciones import Aplicaciones
# Create your views here.

class AplicacionesViews (viewsets.ModelViewSet):
    serializer_class = AplicacionesSerializer  # renderiza JSON
    queryset = Aplicaciones.objects.all()  # Obtiene todos los registros
    parser_classes = (MultiPartParser, FormParser,JSONParser)

    def list(self, request):
        print("=========== aplicaciones.list() ===========\n")
        # queryset = self.filter_queryset(self.get_queryset())
        # serializer = self.get_serializer(queryset, many=True)
        # serializer.is_valid()
        detailedUserInApplications = {} #{"offerId": {Aplicante.as_object}}
        for application in self.get_queryset():
            # detailedUserInApplications.append({application.idOferta.id: application.idAplicante.as_object})
            if application.idOferta.id in detailedUserInApplications.keys():
                detailedUserInApplications[application.idOferta.id].append(application.idAplicante.as_object)
            else:
                detailedUserInApplications[application.idOferta.id] = [application.idAplicante.as_object]
        
        return Response(data=detailedUserInApplications , status=status.HTTP_200_OK)
    
        
        #Retornar aplicaciones y objetos con ususario-oferta

        
