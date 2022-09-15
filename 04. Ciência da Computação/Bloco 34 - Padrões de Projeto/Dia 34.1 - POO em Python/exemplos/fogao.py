from eletrodomestico import Eletrodomestico


class Fogao(Eletrodomestico):
    def __init__(self, cor, voltagem, preco, marca, bocas):
        super().__init__(cor, voltagem, preco, marca)
        self.__bocas = bocas


fogao_inox = Fogao('Inox', 220, 2499, 'Consul', 6)
print(f'Este fogão custa R$ {fogao_inox.preco}.')
