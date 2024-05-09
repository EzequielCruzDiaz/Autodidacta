class Cuentabancaria():
    def __init__(self,saldoInicial):
        self.__saldo = saldoInicial

    def depositar(self,cantidad):
        self.__saldo += cantidad

    def obtenersaldo(self):
        return self.__saldo
    

mi_cuenta = Cuentabancaria(1932)
print("saldo inicial:", mi_cuenta.obtenersaldo())
mi_cuenta.depositar(500)
print("saldo despues del deposito:", mi_cuenta.obtenersaldo())