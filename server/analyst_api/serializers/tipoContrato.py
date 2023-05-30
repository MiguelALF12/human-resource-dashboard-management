from rest_framework import serializers
from ..models.tipoContrato import TipoContrato

class TipoContratoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = TipoContrato
        fields = "__all__"