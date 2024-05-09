class persona:
  def __init__(self,nombre,edad):
        self.nombre = nombre
        self.edad = edad

  def saludar(self):
        print("Hola, soy", self.nombre, "Y tengo", self.edad, "años")


persona1 = persona("ezequiel",25)
persona1.saludar()

