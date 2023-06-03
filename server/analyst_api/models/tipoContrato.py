from django.db import models

class TipoContrato(models.Model):

    FIJO = "FIJO"
    PARCIAL = "PARCIAL"
    TIPOS_DE_CONTRATO = [
        (FIJO, "Fijo"),
        (PARCIAL, "Parcial"),
    ]
    tipo = models.CharField(max_length=30, choices=TIPOS_DE_CONTRATO)

    def __str__(self) -> str:
        return str(self.id) + " " + self.tipo