from django.db import models
from .aplicantes import Aplicantes
from .tipoDocumento import TipoDocumento

# Create your models here.


class DocumentosAplicantes(models.Model):
    # Cada vez que se elimine un aplicante, sua rchivo se eliminará también
    idAplicante = models.ForeignKey(Aplicantes, on_delete=models.CASCADE)
    idTipo = models.ForeignKey(TipoDocumento, on_delete=models.CASCADE)
    # TODO: Pendiente por resolver configuracion
    archivo = models.FileField(upload_to="media/")

    def __str__(self) -> str:
        return str(self.id) + " " + self.archivo.name