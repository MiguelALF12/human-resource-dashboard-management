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

from ...utilities.variousFunctions import zipFiles

class DocumentosEmpleadosViews(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = DocumentosEmpleadosSerializer
    queryset = DocumentosEmpleados.objects.all()

    @action(detail=False, methods=['post'])
    def load_files(self, request):
        print("=========== documentosEmpleados.load_files() ===========\n")
        # Llega cualquier cantidad de documentos
        files = request.data
        belongsToUserWithCedula = files['cedula']
        aplicant = Empleados.objects.get(cedula=belongsToUserWithCedula)
        listOfFiles = list(files.items())[1:]
        print("\n\n")
        print("Lista de archvios a guardar: ", listOfFiles)
        print("\n\n")
        for file in listOfFiles:
            fileType = TipoDocumento.objects.get(tipo=file[0])
            print("Archivo y llave foranea ",file[0], fileType )
            print("\n\n")
            serializer = self.get_serializer(data={'idAplicante':aplicant.id , 'idTipo':fileType.id , 'archivo':file[1]})
            print("Información serializada antes de guardar en BD: ", serializer.initial_data)
            print("\n\n")
            if serializer.is_valid():
                serializer.save()
        print("=========================================================")
        return Response(data={}, status=status.HTTP_201_CREATED)