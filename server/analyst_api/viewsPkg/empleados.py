from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import BadRequest, MultipleObjectsReturned
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.empleados import EmpleadosSerialiazer
from ..models.empleados import Empleados
from aplicant_employee_api.models import Aplicantes


class EmpleadosViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = EmpleadosSerialiazer
    queryset = Empleados.objects.all()

    def create(self, request):
        aplicantToEmployee = Aplicantes.objects.get(id=request.data["id"]).as_object
        aplicantToEmployee["estado"] = "ACTIVO"
        aplicantToEmployee["resultadosEntrevista"] = request.data["resultadosEntrevista"]
        serializer = self.get_serializer(data=aplicantToEmployee)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        newEmployeeId = Empleados.objects.get(cedula=aplicantToEmployee["cedula"]).id
        return Response(data={"id":newEmployeeId}, status=status.HTTP_201_CREATED)
