from rest_framework import serializers
from ..models.empleadoEnActividades import EmpleadosEnActividades


class EmpleadosEnActividadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmpleadosEnActividades
        fields = "__all__"