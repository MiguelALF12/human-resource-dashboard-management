"""
Solo se neesita un endpoint para recibir nuevos documentos, los documentos de aplicante se'ran transferidos al empleado de otra manera.
"""
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import BadRequest, MultipleObjectsReturned
from django.http import FileResponse
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..serializers.documentosEmpleados import DocumentosEmpleadosSerializer
from ..models import DocumentosEmpleados, Empleados, TipoDocumento

from utilities.variousFunctions import zipFiles

class DocumentosEmpleadosViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = DocumentosEmpleadosSerializer
    queryset = DocumentosEmpleados.objects.all()

    @action(detail=False, methods=['post'])
    def load_files(self, request):
        files = request.data
        belongsToUserWithCedula = files['cedula']
        employee = Empleados.objects.get(cedula=belongsToUserWithCedula)
        listOfFiles = list(files.items())[1:]
        for file in listOfFiles:
            fileType = TipoDocumento.objects.get(tipo="OTROS")
            serializer = self.get_serializer(data={'idEmpleado':employee.id , 'idTipo':fileType.id , 'archivo':file[1]})
            if serializer.is_valid():
                serializer.save()
        return Response(data={}, status=status.HTTP_201_CREATED)