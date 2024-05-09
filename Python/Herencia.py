class persona:
    def __init__(self,nombre,apellido):
        self.nombre = nombre
        self.apellido = apellido

    def mostrar_persona(self):
        print("Mi nombre es:", self.nombre, "Mi apellido es:", self.apellido)

class Empleado(persona):
    def __init__(self,nombre,edad,salario):
        super().__init__(nombre,edad)
        self.salario = salario
        


    def mostrar_salario(self):
        print("El salario de", self.nombre, "es", self.salario)

empleado1 = Empleado("Ezequiel", 25, 75000)
empleado1.saludar()
empleado1.mostrar_salario()
empleado1.mostrar_persona()