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
        print("=========== empleados.create() ===========\n")
        aplicantToEmployee = Aplicantes.objects.get(id=request.data["id"]).as_object
        aplicantToEmployee["estado"] = "ACTIVO"
        serializer = self.get_serializer(data=aplicantToEmployee)
        print("(Serializable) Aplicante contratado: ", serializer.initial_data)
        if serializer.is_valid(raise_exception=True):
            self.perform_create(serializer) # Save the serilized data into BD 
            print("Nuevo empleado registrado!\n")
        headers = self.get_success_headers(serializer.data) # Obtiene headers necesarios de formato de aceptación de petición
        return Response(data={}, status=status.HTTP_201_CREATED, headers=headers)
