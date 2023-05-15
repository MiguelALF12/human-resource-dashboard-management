from django.db import models

# Create your models here.


class TipoDocumento(models.Model):
    CEDULA = "CEDULA"
    LIBRETA_MILITAR = "LIBRETA_MILITAR"
    HOJA_DE_VIDA = "HOJA_DE_VIDA"
    CERTIFICADOS_EDUCACION = "CERTIFICADOS_EDUCACION"
    CARTAS_EXPERIENCIA_LABORAL = "CARTAS_EXPERIENCIA_LABORAL"
    CERTIFICADO_EPS = "CERTIFICADO_EPS"
    CERTIFICADO_PENSION = "CERTIFICADO_PENSION"
    BENEFICIOS = "BENEFICIOS"
    OTROS = "OTROS"
    DOCUMENTOS = [
        (CEDULA, "Cedula"),
        (LIBRETA_MILITAR, "Libreta militar"),
        (HOJA_DE_VIDA, "Hoja de vida"),
        (CERTIFICADOS_EDUCACION, "Certificados de estudio"),
        (CARTAS_EXPERIENCIA_LABORAL, "Cartas de experiencia laboral"),
        (CERTIFICADO_EPS, "Certificado EPS"),
        (CERTIFICADO_PENSION, "Certificado Pensión"),
        (BENEFICIOS, "Beneficios"),
        (OTROS, "Otros"),
    ]
    tipo = models.CharField(max_length=30, choices=DOCUMENTOS)

    def __str__(self) -> str:
        return str(self.id) + " " + self.tipo