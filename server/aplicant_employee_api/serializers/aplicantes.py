from rest_framework import serializers
from ..models.aplicantes import Aplicantes


class AplicantesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Aplicantes
        fields = "__all__"

