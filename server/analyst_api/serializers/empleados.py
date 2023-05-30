from rest_framework import serializers
from ..models.empleados import Empleados
# Create your models here.


class EmpleadosSerialiazer(serializers.ModelSerializer):
    
    class Meta:
        model = Empleados
        fields = "__all__"