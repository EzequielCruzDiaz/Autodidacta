class Departamento:
    def __init__(self, nombre):
        self.nombre = nombre


class Empleado:
    def __init__(self,nombre,departamento):
        self.nombre = nombre
        self.departamento = departamento


departamento = Departamento("Software")
empleado = Empleado("Ezequiel", departamento)

print ("Nombre del empleado:", empleado.nombre)
print("Departamento del empleado:", empleado.departamento.nombre)

