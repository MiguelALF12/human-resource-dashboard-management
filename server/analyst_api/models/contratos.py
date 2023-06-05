from django.db import models
from .tipoContrato import TipoContrato
from .empleados import Empleados
from .documentosEmpleados import DocumentosEmpleados
# Create your models here.


class Contratos(models.Model):
    
    fechaInicio = models.DateField(auto_created=True)
    tipoContrato = models.ForeignKey(TipoContrato, on_delete=models.CASCADE)
    salario = models.CharField(max_length=10)
    cargo = models.CharField(max_length=35)
    descripcionCargo = models.TextField(blank=True)
    idEmpleado = models.ForeignKey(Empleados, on_delete=models.CASCADE, default=0)
    idContrato = models.ForeignKey(DocumentosEmpleados, on_delete=models.CASCADE, default=0)
    
    def __str__(self) -> str:
        return str(self.id) + " " + self.cargo
