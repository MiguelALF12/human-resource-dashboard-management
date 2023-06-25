"""
#TODO: Si la información de credenciales del usuario se actualiza, se actualiza también en Users
#TODO: Terminar endpoint de logout
"""

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.core.exceptions import MultipleObjectsReturned
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
        serializer = self.get_serializer(data=request.data) # from JSON to Python
        if serializer.is_valid(raise_exception=True):
            self.perform_create(serializer)
        try:
            serializerData = serializer.initial_data
            user = User.objects.create_user(serializerData['cedula'], serializerData['correo'], serializerData['contrasena'])
            headers = self.get_success_headers(serializer.data) # Obtiene headers necesarios de formato de aceptación de petición
            return Response(data={}, status=status.HTTP_201_CREATED, headers=headers)
        except MultipleObjectsReturned:
            return Response(data={}, status=status.HTTP_400_BAD_REQUEST)

        # return Response(serializer.data['id'], status=status.HTTP_201_CREATED, headers=headers)

    @action(detail=False, methods=["post"])
    def authenticate(self, request):
        # print(request.data)
        user = authenticate(username=request.data["cedula"], password=request.data["password"])
        # print(User.objects.all()[2].password == request.data["password"])
        if user is not None:
            login(request, user)
            #Permissions
            if user.is_superuser:
                userType = "admin"
                userName = user.get_username()
            else:
                userType = "user"
                user = Aplicantes.objects.get(cedula=request.data["cedula"])
                userName = user.cedula
            return Response(data={'status':"authenticated", 'type': userType, 'id':user.id, 'username':userName },status=status.HTTP_202_ACCEPTED)
        else:
            return Response(data={'status':"unauthenticated", 'type':'none'},status=status.HTTP_404_NOT_FOUND)

    # @action(detail=True)
    # def log_out(self, request, pk=None):
    #     user = User.objects.get(username=request.data["cedula"], password=request.data["password"])
    #     if user.is_authenticated:
    #         logout(request)
    #     return Response({}, status=status.HTTP_200_OK)
    
    @action(detail=False, methods=["patch"])
    def update_user_credentials(self, request):
        userToUpdate = User.objects.get(username=request.data["oldUsername"])
        userToUpdate.username = request.data["cedula"]
        userToUpdate.set_password(request.data["contrasena"])
        userToUpdate.email = request.data["correo"]
        userToUpdate.save()
        return Response(data={}, status=status.HTTP_200_OK)
    
        
        
        
