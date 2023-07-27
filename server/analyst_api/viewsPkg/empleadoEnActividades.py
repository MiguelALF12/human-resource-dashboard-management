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

    def create(self, request):
        hasMultipleElements = True if type(request.data)==list else False
        serializer = self.get_serializer(data=request.data, many= hasMultipleElements)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data={},status=status.HTTP_400_BAD_REQUEST)