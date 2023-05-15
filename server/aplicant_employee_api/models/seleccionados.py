from django.db import models
from .aplicaciones import Aplicaciones
# Create your models here.


class Seleccionados(models.Model):
    PRESELECCION = "PRESELECCION"
    SELECCION = "SELECCION"
    CONTRATACION = "CONTRATACION"
    FASES = [(PRESELECCION, "Preselección"), (SELECCION,
                                              "Selección"), (CONTRATACION, "Contratación")]
    idAplicacion = models.ForeignKey(Aplicaciones, on_delete=models.CASCADE)
    faseAplicante = models.CharField(max_length=13, choices=FASES)
