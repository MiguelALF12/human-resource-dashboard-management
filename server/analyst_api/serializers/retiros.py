from rest_framework import serializers
from ..models.retiros import Retiros

class RetirosSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Retiros
        fields = "__all__"