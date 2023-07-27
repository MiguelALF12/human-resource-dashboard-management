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
    numTelefono = models.CharField(max_length=12, blank=True, default="")
    ciudad = models.CharField(max_length=15)
    direccion = models.TextField(default="")
    estado = models.CharField(max_length=30, choices=ESTADO_EMPLEADO)
    resultadosEntrevista = models.TextField()
    
    def __str__(self) -> str:
        return str(self.id) + " " + self.cedula + self.nombre
    @property
    def as_object(self):
        employee_as_object = {
            "id":self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "cedula": self.cedula,
            "correo": self.correo,
            "numCelular": self.numCelular,
            "numTelefono": self.numTelefono,
            "ciudad": self.ciudad,
            "direccion": self.direccion,
            "estado": self.estado,
            "resultadosEntrevista": self.resultadosEntrevista
        }
        return employee_as_object