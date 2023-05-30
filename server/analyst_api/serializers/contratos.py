from rest_framework import serializers
from ..models.contratos import Contratos
# Create your models here.


class ContratosSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Contratos
        fields = "__all__"

