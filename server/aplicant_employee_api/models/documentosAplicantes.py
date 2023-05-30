from django.db import models
from .aplicantes import Aplicantes
from .tipoDocumento import TipoDocumento

# Create your models here.


class DocumentosAplicantes(models.Model):
    idAplicante = models.ForeignKey(Aplicantes, on_delete=models.CASCADE)
    idTipo = models.ForeignKey(TipoDocumento, on_delete=models.CASCADE)
    archivo = models.FileField(upload_to="aplicants")

    def __str__(self) -> str:
        return str(self.id) + " " + self.archivo.name