from django.db import models

# Create your models here.


class Ofertas(models.Model):
    ABIERTA = "ABIERTA"
    CERRADA = "CERRADA"
    DISPONIBILIDAD = [(ABIERTA, "Abierta"), (CERRADA, "Cerrada")]
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    estadoDisponibilidad = models.CharField(max_length=7,choices=DISPONIBILIDAD, default=ABIERTA)
    vacantes = models.CharField(max_length=3)
    fechaInicio = models.DateField()
    salario = models.CharField(max_length=10)
    experienciaAnos = models.CharField(max_length=2)

    @property
    def as_object(self):
        offer_as_object = {
            "nombre": self.nombre,
            "descripcion": self.descripcion,
            "estadoDisponibilidad": self.estadoDisponibilidad,
            "vacantes": self.vacantes,
            "fechaInicio": self.fechaInicio,
            "salario": self.salario,
            "experienciaAnos": self.experienciaAnos
        }
        return offer_as_object

    def __str__(self) -> str:
        return str(self.id)+ " " + self.nombre