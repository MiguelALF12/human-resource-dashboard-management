from rest_framework import serializers
from ..models.ofertas import Ofertas


class OfertasSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ofertas
        fields = "__all__"

