"""
    #TODO: Colocar algunas prestaciones sociales como opciones de valor
"""

from django.db import models

# Create your models here.


class PrestacionSocial(models.Model):

    nombre = models.CharField(max_length=100)
    descripion = models.CharField(max_length=100)
    valor = models.CharField(max_length=7)

    def __str__(self) -> str:
        return str(self.id) + " " + str(self.nombre) + " " + str(self.valor)
