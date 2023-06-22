from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.contratos import ContratosSerializer
from ..models.contratos import Contratos
from ..models.documentosEmpleados import DocumentosEmpleados
from ..models.empleados import Empleados


class ContratosViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = ContratosSerializer
    queryset = Contratos.objects.all()

    def create(self, request):
        employee = Empleados.objects.get(cedula= request.data["cedula"])
        employeeDocs = DocumentosEmpleados.objects.filter(idEmpleado=employee.id,idTipo=9)
        contractFile = ""
        for doc in employeeDocs:
            if "CONTRATO" in doc.archivo.name:
                contractFile = doc
        newOffer = {}
        for entry in request.data.items():
            newOffer[entry[0]] = entry[1]
        newOffer["idContrato"] = contractFile.id
        newOffer["idEmpleado"] = employee.id
        serializer = self.get_serializer(data=newOffer)
        if serializer.is_valid(raise_exception=True):
            serializer.save() # Save the serilized data into BD 
        return Response(data={}, status=status.HTTP_201_CREATED)
