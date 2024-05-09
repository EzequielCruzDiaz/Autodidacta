class animal():
    def hablar(self):
        pass


class perro(animal):
    def hablar(self):
        return "Guau"
    
class gato(animal):
     def hablar(self):
         return "Miau"
     

def hacer_sonar(animal):
    print(animal.hablar())


mi_perro = perro()
mi_gato = gato()

hacer_sonar(mi_gato)
hacer_sonar(mi_perro)