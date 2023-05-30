from django.db import models
from .tipoContrato import TipoContrato
# Create your models here.


class Contratos(models.Model):
    
    fechaInicio = models.DateField(auto_created=True)
    fechaFin = models.DateField(auto_created=True)
    tipoContrato = models.ForeignKey(TipoContrato, on_delete=models.CASCADE)
    salario = models.CharField(max_length=7)
    cargo = models.CharField(max_length=35)
    descripcionCargo = models.TextField()
    
    def __str__(self) -> str:
        return str(self.id) + " " + self.cargo
