from django.shortcuts import render
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
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer) # Save the serailized data into DB 
        headers = self.get_success_headers(serializer.data) # Obtiene headers necesarios de formato de aceptación de petición
        return Response(status=status.HTTP_201_CREATED, headers=headers)
        # return Response(serializer.data['id'], status=status.HTTP_201_CREATED, headers=headers)

        
