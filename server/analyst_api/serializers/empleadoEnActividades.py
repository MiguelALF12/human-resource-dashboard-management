from rest_framework import serializers
from ..models.empleadoEnActividades import Empleados
# Create your models here.


class EmpleadosEnActividadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleados
        fields = "__all__"