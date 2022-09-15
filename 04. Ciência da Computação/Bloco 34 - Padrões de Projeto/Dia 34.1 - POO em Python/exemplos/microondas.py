from eletrodomestico import Eletrodomestico


class Microondas(Eletrodomestico):
    def __init__(self, cor, voltagem, preco, marca):
        super().__init__(cor, voltagem, preco, marca)


microondas_preto = Microondas('Preto', 220, 550, 'Electrolux')
print(f'Este microondas custa R$ {microondas_preto.preco}.')
