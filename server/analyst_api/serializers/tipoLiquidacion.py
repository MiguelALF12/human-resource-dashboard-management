from rest_framework import serializers
from ..models.tipoLiquidacion import TipoLiquidacion

class TipoLiquidacionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = TipoLiquidacion
        fields = "__all__"