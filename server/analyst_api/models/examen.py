from django.db import models
from .retiros import Retiros
# Create your models here.


class Examen(models.Model):

    fecha = models.DateTimeField(auto_created=True)
    descripcion = models.TextField()
    observaciones = models.TextField()
    idRetiro = models.ForeignKey(Retiros, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return str(self.id) + " " + str(self.idRetiro) + " " + self.fecha
