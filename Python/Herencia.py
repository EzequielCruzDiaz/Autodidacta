from CuentaBancaria import Persona

class Empleado(Persona):
    def __init__(self,nombre,edad,salario):
        super().__init__(nombre,edad)
        self.salario = salario


    def mostrar_salario(self):
        print("El salario de", self.nombre, "es", self.salario)

empleado1 = Empleado("Ezequiel", 25,75000)
empleado1.saludar()
empleado1.mostrar_salario()
