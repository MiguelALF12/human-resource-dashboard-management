from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.actividades import ActividadesSerializer
from ..models.actividades import Actividades
from ..models.actividades import TipoActividad

class ActividadesViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = ActividadesSerializer
    queryset = Actividades.objects.all()

    def create(self, request):
        newActivityRequest = request.data
        activityType = TipoActividad.objects.get(tipo=newActivityRequest["tipoActividad"]).id
        newActivityRequest["tipoActividad"] = activityType
        # print(newActivityRequest)
        serializer = self.get_serializer(data=newActivityRequest)
        if serializer.is_valid(raise_exception=True):
            createdActivity = serializer.save()
            return Response(data={"id":createdActivity.id}, status=status.HTTP_201_CREATED)
        return Response(data={}, status=status.HTTP_400_BAD_REQUEST)

