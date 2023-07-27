from django.db import models
from .tipoActividad import TipoActividad
# Create your models here.


class Actividades(models.Model):
    tipoActividad = models.ForeignKey(TipoActividad, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=40)
    descripcion = models.TextField()
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    
    def __str__(self) -> str:
        return str(self.id) + " " + self.nombre + " " + str(self.fecha_inicio) + " " + str(self.fecha_fin)
