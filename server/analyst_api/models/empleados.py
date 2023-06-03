from django.db import models
# Create your models here.


class Empleados(models.Model):
    
    ACTIVO = "ACTIVO"
    INACTIVO = "INACTIVO"
    ESTADO_EMPLEADO = [
        (ACTIVO, "Activo"),
        (INACTIVO, "Inactivo"),
    ]

    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    cedula = models.CharField(max_length=12, blank=False, default="0")
    correo = models.CharField(max_length=100)
    numCelular = models.CharField(max_length=20)
    numTelefono = models.CharField(max_length=12)
    ciudad = models.CharField(max_length=15)
    direccion = models.TextField(default=True)
    estado = models.CharField(max_length=30, choices=ESTADO_EMPLEADO)
    resultadosEntrevista = models.TextField(blank=True) 
    
    def __str__(self) -> str:
        return str(self.id) + " " + self.cedula + self.nombre
