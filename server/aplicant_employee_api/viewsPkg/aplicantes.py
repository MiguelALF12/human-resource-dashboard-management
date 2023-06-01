from django.shortcuts import render
from django.contrib.auth import authenticate
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from ..serializers.aplicantes import AplicantesSerializer

from ..models import Aplicantes


# Create your views here.

class AplicantesViews (viewsets.ModelViewSet):
    serializer_class = AplicantesSerializer  # renderiza JSON
    queryset = Aplicantes.objects.all()  # Obtiene todos los registros

    def create(self, request):
        print("=========== aplicantes.create() ===========\n")
        serializer = self.get_serializer(data=request.data) # from JSON to Python
        serializer.is_valid(raise_exception=True)
        print("Serializable antes de guardar información: ", serializer.initial_data)
        self.perform_create(serializer) # Save the serailized data into aplicant_employee_api_aplicantes 
        # User credentials creation. This will be for authentication purposes
        serializerData = serializer.initial_data
        user = User.objects.create_user(serializerData['cedula'], serializerData['correo'], serializerData['contrasena'])
        print("Credenciales de usuario: ", user)
        headers = self.get_success_headers(serializer.data) # Obtiene headers necesarios de formato de aceptación de petición
        print("=========================================================")
        return Response(status=status.HTTP_201_CREATED, headers=headers)
        # return Response(serializer.data['id'], status=status.HTTP_201_CREATED, headers=headers)

    @action(detail=False, methods=["post"])
    def authenticate(self, request):
        print("=========== aplicantes.authenticate() ===========\n")
        print("Información a verificar: ", request.data)
        user = authenticate(username=request.data["cedula"], password=request.data["password"])
        print("Usuario encontrado: ", user)
        if user is not None:
            #Permissions
            return Response(data={'status':"authenticated", 'type':'user'},status=status.HTTP_202_ACCEPTED)
        else:
            return Response(data={'status':"unauthenticated", 'type':'none'},status=status.HTTP_404_NOT_FOUND)

        # user = authenticate()
    
        
