from rest_framework import serializers
from ..models.liquidaciones import Liquidaciones


class LiquidacionesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Liquidaciones
        fields = "__all__"