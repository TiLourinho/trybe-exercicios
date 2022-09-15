from liquidificador import Liquidificador
from geladeira import Geladeira


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.geladeira = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_geladeira(self, geladeira: Geladeira):
        if geladeira.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= geladeira.preco
            self.geladeira = geladeira

    def __str__(self):
        resposta_1 = f'{self.nome} - possui {self.saldo_na_conta} reais em sua conta.'  # noqa
        resposta_2 = f'{self.nome} - possui {self.saldo_na_conta} reais em sua conta e possui uma geladeira'  # noqa

        condicao = resposta_2 if self.geladeira else resposta_1

        return condicao


if __name__ == '__main__':
    liquidificador_preto = Liquidificador('Preto', 500, 220, 5350)
    pessoa_cozinheira = Pessoa('Jacquin', 10000)
    pessoa_cozinheira.comprar_liquidificador(liquidificador_preto)
    print(f'Agora o {pessoa_cozinheira.nome} tem um liquidificador {liquidificador_preto.cor}')  # noqa

    geladeira_preta = Geladeira('Preta', 443, 220, 2, 4149, 'Brastemp')
    pessoa_cozinheira.comprar_geladeira(geladeira_preta)
    print(pessoa_cozinheira)
