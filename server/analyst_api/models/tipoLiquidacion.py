from django.db import models

# Create your models here.


class TipoLiquidacion(models.Model):
    NOMINA = "NOMINA"
    PRESTACIONES_SOCIALES = "PRESTACIONES_SOCIALES"
    CONTRATO = "CONTRATO"
    TIPOS_LIQUIDACION = [
        (NOMINA, "Nomina"),
        (PRESTACIONES_SOCIALES, "Prestaciones_sociales"),
        (CONTRATO, "Contrato")
    ]
    tipo = models.CharField(max_length=30, choices=TIPOS_LIQUIDACION)

    def __str__(self) -> str:
        return str(self.id) + " " + self.tipo
