from django.db import models
from .actividades import Actividades
from .empleados import Empleados
# Create your models here.


class EmpleadosEnActividades(models.Model):
    APROBADO = "APROBADO"
    DESAPROBADO = "DESAPROBADO"
    ESTADO_ACTIVIDAD = [
        (APROBADO, "Aprobado"),
        (DESAPROBADO, "Desaprobado")
    ]
    idActividad = models.ForeignKey(Actividades, on_delete=models.CASCADE)
    idEmpleado = models.ForeignKey(Empleados, on_delete=models.CASCADE)
    resultadoEvaluativo = models.CharField(max_length=12, choices=ESTADO_ACTIVIDAD, blank=True)
    observaciones = models.TextField()

    def __str__(self) -> str:
        return str(self.id) + " " + str(self.idActividad) + " " + str(self.idEmpleado)