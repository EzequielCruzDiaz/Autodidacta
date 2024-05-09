from abc import ABC, abstractmethod


class Figura(ABC):
    @abstractmethod
    def area(self):
        pass


class Rectangulo(Figura):
    def __init__(self, ancho, largo):
        self.largo = largo
        self.ancho = ancho


    def area (self):
        return self.largo * self.ancho


mi_rectangulo = Rectangulo(5, 3)
print("Area del rectangulo:", mi_rectangulo.area())
