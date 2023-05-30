from django.db import models
from .contratos import Contratos
from .prestacionSocial import PrestacionSocial
# Create your models here.


class PrestacionesPorContrato(models.Model):
    idContrato = models.ForeignKey(Contratos, on_delete=models.CASCADE)
    idPrestacionSocial = models.ForeignKey(PrestacionSocial,  on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return str(self.id) + " " + str(self.idContrato) + " " + str(self.idPrestacionSocial)
