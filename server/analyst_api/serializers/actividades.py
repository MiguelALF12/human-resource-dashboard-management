from rest_framework import serializers
from ..models.actividades import Actividades


class ActividadesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Actividades
        fields = "__all__"
