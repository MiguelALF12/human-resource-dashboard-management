from django.db import models
from .empleados import Empleados
from .tipoDocumento import TipoDocumento
# Create your models here.


class DocumentosEmpleados(models.Model):
    # Cada vez que se elimine un aplicante, sua rchivo se eliminará también
    idEmpleado = models.ForeignKey(Empleados, on_delete=models.CASCADE)
    idTipo = models.ForeignKey(TipoDocumento, on_delete=models.CASCADE)
    # TODO: Pendiente por resolver configuracion
    archivo = models.FileField(upload_to="employees")

    def __str__(self) -> str:
        return str(self.id) + " " + self.archivo.name
