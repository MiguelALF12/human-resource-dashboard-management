from rest_framework import serializers
from ..models.tipoActividad import TipoActividad

class TipoActividadSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = TipoActividad
        fields = "__all__"