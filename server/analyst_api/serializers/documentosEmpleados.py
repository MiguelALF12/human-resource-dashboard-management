from rest_framework import serializers
from ..models.documentosEmpleados import DocumentosEmpleados
# Create your models here.


class DocumentosEmpleadosSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = DocumentosEmpleados
        fields = "__all__"
