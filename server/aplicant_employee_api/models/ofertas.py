from django.db import models

# Create your models here.


class Ofertas(models.Model):
    ABIERTA = "ABIERTA"
    CERRADA = "CERRADA"
    DISPONIBILIDAD = [(ABIERTA, "Abierta"), (CERRADA, "Cerrada")]
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    estadoDisponibilidad = models.CharField(max_length=7,
                                            choices=DISPONIBILIDAD, default=ABIERTA)
    vacantes = models.CharField(max_length=3)
    fechaInicio = models.DateField()
    salario = models.CharField(max_length=7)
    experienciaAnos = models.CharField(max_length=2)

    def __str__(self) -> str:
        return str(self.id)+ " " + self.nombre