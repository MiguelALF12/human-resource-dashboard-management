from rest_framework import serializers
from ..models.seleccionados import Seleccionados

class SeleccionadosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Seleccionados
        fields = "__all__"
    