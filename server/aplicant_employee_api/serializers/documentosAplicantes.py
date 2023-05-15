from rest_framework import serializers
from ..models import DocumentosAplicantes

class DocumentosAplicantesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentosAplicantes
        fields = "__all__"
        