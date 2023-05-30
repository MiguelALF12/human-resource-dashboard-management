from django.db import models
from .contratos import Contratos
# Create your models here.


class Retiros(models.Model):
    
    fecha = models.DateTimeField(auto_created=True)
    descripcion = models.TextField()
    entregaDeImplementos = models.BooleanField()
    idContrato = models.ForeignKey(Contratos, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.id) + " " + str(self.fecha) + " " + str(self.contrato)
