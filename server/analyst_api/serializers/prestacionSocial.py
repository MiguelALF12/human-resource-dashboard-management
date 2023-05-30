from rest_framework import serializers
from ..models.prestacionSocial import PrestacionSocial

class PrestacionSocialSerializers(serializers.ModelSerializer):

    class Meta:
        model = PrestacionSocial
        fields = "__all__"