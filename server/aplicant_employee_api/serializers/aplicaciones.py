from rest_framework import serializers
from ..models.aplicaciones import Aplicaciones

class AplicacionesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Aplicaciones
        fields = "__all__"



