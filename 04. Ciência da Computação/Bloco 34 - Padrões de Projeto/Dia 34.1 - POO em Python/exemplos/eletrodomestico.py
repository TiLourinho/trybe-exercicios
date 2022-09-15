class Eletrodomestico:
    def __init__(self, cor, voltagem, preco, marca):
        self.preco = preco
        self.__cor = cor
        self.__voltagem = voltagem
        self.__marca = marca
        self.__ligado = False

    def ligar(self):
        self.__ligado = True

    def desligar(self):
        self.__ligado = False

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor
