from django.db import models
from .aplicaciones import Aplicaciones
# Create your models here.


class Seleccionados(models.Model):
    SELECCION = "SELECCION"
    PRECONTRATACION = "PRE_CONTRATACION"
    FASES = [(SELECCION,"Selección"), (PRECONTRATACION, "Precontratación")]
    idAplicacion = models.ForeignKey(Aplicaciones, on_delete=models.CASCADE)
    faseAplicante = models.CharField(max_length=17, choices=FASES)
