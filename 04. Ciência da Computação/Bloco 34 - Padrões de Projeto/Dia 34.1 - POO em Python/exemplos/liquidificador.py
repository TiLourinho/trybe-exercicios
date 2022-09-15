from rich import print
from eletrodomestico import Eletrodomestico


class Liquidificador(Eletrodomestico):
    def __init__(self, cor, voltagem, preco, marca):
        super().__init__(cor, voltagem, preco, marca)


if __name__ == '__main__':
    liquidificador_vermelho = Liquidificador('Vermelho', 220, 125, 'Arno')
    liquidificador_vermelho.ligar()
    print('Está ligado?', liquidificador_vermelho.esta_ligado())

    liquidificador_vermelho.desligar()
    print('Está ligado?', liquidificador_vermelho.esta_ligado())

    liquidificador_azul = Liquidificador('Azul', 220, 125, 'Arno')
    # print(f'A cor atual é {liquidificador_azul.__cor}')
    print(f'A cor atual é {liquidificador_azul.cor}\n')

    liquidificador_azul.cor = 'Verde'
    print(f'Após pintarmos, a nova cor é {liquidificador_azul.cor}')
