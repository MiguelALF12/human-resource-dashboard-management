from django.db import models

# Create your models here.


class TipoActividad(models.Model):
    
    INDUCCION = "CEDULA"
    REINDUCCION = "REINDUCCION"
    ENTRENAMIENTO = "ENTRENAMIENTO" 
    CAPACITACION = "CAPACITACION"
    TIPOS_DE_ACTIVIDAD = [
        (INDUCCION, "Induccion"),
        (REINDUCCION, "Reinduccion"),
        (ENTRENAMIENTO, "Entrenamiento"),
        (CAPACITACION, "Capacitacion")
    ]
    tipo = models.CharField(max_length=30, choices=TIPOS_DE_ACTIVIDAD)

    def __str__(self) -> str:
        return str(self.id) + " " + self.tipo
