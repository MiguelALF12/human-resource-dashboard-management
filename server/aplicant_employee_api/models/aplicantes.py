from django.db import models

# Create your models here.


class Aplicantes(models.Model):
    ESCOLARIDAD_PRIMARIA = "PRIMARIA"
    ESCOLARIDAD_BACHILLER = "BACHILLER"
    ESCOLARIDAD_TECNICO = "TECNICO"
    ESCOLARIDAD_PROFESIONAL = "PROFESIONAL"
    GRADOS_ESCOLARIDAD = [(ESCOLARIDAD_PRIMARIA, "Primaria"),
                          (ESCOLARIDAD_BACHILLER, "Bachiller"),
                          (ESCOLARIDAD_TECNICO, "Técnico"),
                          (ESCOLARIDAD_PROFESIONAL, "Profesional"),]
    FLUIDEZ_INGLES_BAJA = "BAJA"
    FLUIDEZ_INGLES_MEDIA = "MEDIA"
    FLUIDEZ_INGLES_ALTA = "ALTA"
    FLUIDEZ_INGLES = [(FLUIDEZ_INGLES_BAJA, "Baja"),
                      (FLUIDEZ_INGLES_MEDIA, "Media"),
                      (FLUIDEZ_INGLES_ALTA, "Alta")]
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    cedula = models.CharField(max_length=12, blank=False, default="0")
    # userName = models.CharField(max_length=50,unique=True)
    correo = models.CharField(max_length=100)
    contrasena = models.CharField(max_length=50)
    numCelular = models.CharField(max_length=20)
    numTelefono = models.CharField(max_length=12)
    # TODO: opciones de ciudad aquí con Field.Choices
    ciudad = models.CharField(max_length=15)
    direccion = models.TextField(default=True)
    escolaridad = models.CharField(max_length=12,
                                   choices=GRADOS_ESCOLARIDAD, default=ESCOLARIDAD_BACHILLER)
    titulo = models.CharField(max_length=100, default=True)
    certificaciones = models.TextField(default=True)
    manejoIngles = models.BooleanField()
    speaking = models.CharField(max_length=5, choices=FLUIDEZ_INGLES)
    writing = models.CharField(max_length=5, choices=FLUIDEZ_INGLES)
    listening = models.CharField(max_length=5, choices=FLUIDEZ_INGLES)
    experienciaLaboral = models.CharField(max_length=2)  # experiencia en años
    dispuestoTraslado = models.BooleanField(default=True)
    trabajarHorasExtra = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.nombre
