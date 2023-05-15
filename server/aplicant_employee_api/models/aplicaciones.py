from django.db import models
from .aplicantes import Aplicantes
from .ofertas import Ofertas
# Create your models here.


class Aplicaciones(models.Model):
    idAplicante = models.ForeignKey(Aplicantes, on_delete=models.CASCADE)
    idOferta = models.ForeignKey(Ofertas, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.id) + " " + str(self.idAplicante)
        # Esto retorna: 1 Miguel Angel, ya que el método __str__ en Aplicantes se definio que retornara self.nombre del mdelo