from liquidificador import Liquidificador
from geladeira import Geladeira
from eletrodomestico import Eletrodomestico


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    def comprar_eletrodomestico(self, eletrodomestico: Eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomesticos.append(eletrodomestico)

    def __str__(self):
        resposta_1 = f'{self.nome} - possui {self.saldo_na_conta} reais em sua conta.'  # noqa
        resposta_2 = f'{self.nome} - possui {self.saldo_na_conta} reais em sua conta e {len(self.eletrodomesticos)} eletrodomésticos.'  # noqa

        condicao = resposta_2 if len(self.eletrodomesticos) > 1 else resposta_1

        return condicao


if __name__ == '__main__':
    liquidificador_preto = Liquidificador('Preto', 220, 5350, 'Arno')
    pessoa_cozinheira = Pessoa('Jacquin', 10000)
    pessoa_cozinheira.comprar_eletrodomestico(liquidificador_preto)
    print(f'Agora o {pessoa_cozinheira.nome} tem um liquidificador {liquidificador_preto.cor}')  # noqa

    geladeira_preta = Geladeira('Preta', 220, 4149, 'Brastemp', 443, 2)
    pessoa_cozinheira.comprar_eletrodomestico(geladeira_preta)
    print(pessoa_cozinheira)
