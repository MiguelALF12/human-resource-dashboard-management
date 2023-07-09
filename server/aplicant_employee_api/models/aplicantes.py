"""
# TODO: opciones de ciudad aquí con Field.Choices
"""
from django.db import models

# Create your models here.


class Aplicantes(models.Model):
    ESCOLARIDAD_NINGUNA = "NINGUNA"
    ESCOLARIDAD_PRIMARIA = "PRIMARIA"
    ESCOLARIDAD_BACHILLER = "BACHILLER"
    ESCOLARIDAD_TECNICO = "TECNICO"
    ESCOLARIDAD_PROFESIONAL = "PROFESIONAL"
    GRADOS_ESCOLARIDAD = [(ESCOLARIDAD_NINGUNA, "Ninguna"),
                          (ESCOLARIDAD_PRIMARIA, "Primaria"),
                          (ESCOLARIDAD_BACHILLER, "Bachiller"),
                          (ESCOLARIDAD_TECNICO, "Técnico"),
                          (ESCOLARIDAD_PROFESIONAL, "Profesional"),]
    FLUIDEZ_INGLES_NINGUNA = "NINGUNA"
    FLUIDEZ_INGLES_BAJA = "BAJA"
    FLUIDEZ_INGLES_MEDIA = "MEDIA"
    FLUIDEZ_INGLES_ALTA = "ALTA"
    FLUIDEZ_INGLES = [(FLUIDEZ_INGLES_NINGUNA, "Ninguna"),
                      (FLUIDEZ_INGLES_BAJA, "Baja"),
                      (FLUIDEZ_INGLES_MEDIA, "Media"),
                      (FLUIDEZ_INGLES_ALTA, "Alta")]
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    cedula = models.CharField(max_length=12, blank=False, default="0")
    correo = models.CharField(max_length=100)
    contrasena = models.CharField(max_length=50)
    numCelular = models.CharField(max_length=20)
    numTelefono = models.CharField(max_length=12, blank=True, default="")
    ciudad = models.CharField(max_length=15)
    direccion = models.TextField(default=True)
    escolaridad = models.CharField(max_length=12,choices=GRADOS_ESCOLARIDAD, default=ESCOLARIDAD_BACHILLER)
    titulo = models.CharField(max_length=100, blank=True, default="")
    certificaciones = models.TextField(blank=True, default="")
    manejoIngles = models.BooleanField()
    speaking = models.CharField(max_length=7, choices=FLUIDEZ_INGLES)
    writing = models.CharField(max_length=7, choices=FLUIDEZ_INGLES)
    listening = models.CharField(max_length=7, choices=FLUIDEZ_INGLES)
    experienciaLaboral = models.CharField(max_length=2)  # experiencia en años
    dispuestoTraslado = models.BooleanField(default=False)
    trabajarHorasExtra = models.BooleanField(default=False)
    contratado = models.BooleanField(default=False)
    imagenPerfil = models.TextField(default="")

    @property
    def as_object(self):
        aplicant_as_object = {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "cedula": self.cedula,
            "correo": self.correo,
            "contrasena": self.contrasena,
            "numCelular": self.numCelular,
            "numTelefono": self.numTelefono,
            "ciudad": self.ciudad,
            "direccion": self.direccion,
            "escolaridad": self.escolaridad,
            "titulo": self.titulo,
            "certificaciones": self.certificaciones,
            "manejoIngles": self.manejoIngles,
            "speaking": self.speaking,
            "writing": self.writing,
            "listening": self.listening,
            "experienciaLaboral": self.experienciaLaboral,
            "dispuestoTraslado": self.dispuestoTraslado,
            "trabajarHorasExtra": self.trabajarHorasExtra,
            "contratado": self.contratado
        }
        return aplicant_as_object

    
    def __str__(self) -> str:
        return str(self.id) + " " + self.nombre
