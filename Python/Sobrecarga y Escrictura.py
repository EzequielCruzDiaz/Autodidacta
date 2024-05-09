class Calculadora:
    def sumar(self, a, b):
        return a + b

class calculadoraCientifica(Calculadora):
    def sumar(self,a,b,c):
        return a + b + c
    

calculadora = Calculadora()
calculadora_Cientifica = calculadoraCientifica()


print("Suma:", calculadora.sumar(2, 3))
print("Suma:", calculadora_Cientifica.sumar(2,3,4))