from django.db import models
from .tipoLiquidacion import TipoLiquidacion
from .empleados import Empleados
# Create your models here.


class Liquidaciones(models.Model):
    fecha_inicio = models.DateField(auto_created=True)
    fecha_fin = models.DateField(auto_created=True)
    fecha_pago = models.DateField(auto_created=True)
    hora = models.TimeField(auto_created=True)
    idEmpleado = models.ForeignKey(Empleados, on_delete=models.CASCADE)
    valor = models.CharField(max_length=7, default="0")
    tipoLiquidacion = models.ForeignKey(TipoLiquidacion, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.id) + " " + str(self.idEmpleado) + " " + self.fecha_inicio + "-" + self.fecha_fin
    
