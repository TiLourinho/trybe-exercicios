from rich import print


class Liquidificador:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__amperagem_atual_no_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor

    @property
    def potencia(self):
        return self.__potencia

    @property
    def voltagem(self):
        return self.__voltagem

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


liquidificador_vermelho = Liquidificador('Vermelho', 250, 220, 125)
liquidificador_vermelho.ligar(1)
print('Está ligado?', liquidificador_vermelho.esta_ligado())

liquidificador_vermelho.desligar()
print('Está ligado?', liquidificador_vermelho.esta_ligado())

liquidificador_azul = Liquidificador('Azul', 250, 220, 125)
# print(f'A cor atual é {liquidificador_azul.__cor}')
print(f'A cor atual é {liquidificador_azul.cor}')

liquidificador_azul.cor = 'Verde'
print(f'Após pintarmos, a nova cor é {liquidificador_azul.cor}')

print('\nO liquidificador tem as seguintes especificações:\n')
print(f'- cor: {liquidificador_azul.cor.lower()}')
print(f'- potência: {liquidificador_azul.potencia} W')
print(f'- voltagem: {liquidificador_azul.voltagem} V')
print(f'- preço: R$ {liquidificador_azul.preco}')
