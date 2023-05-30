from rest_framework import serializers
from ..models.prestacionesPorContrato import PrestacionesPorContrato


class PrestacionesPorContratoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrestacionesPorContrato
        fields = "__all__"
