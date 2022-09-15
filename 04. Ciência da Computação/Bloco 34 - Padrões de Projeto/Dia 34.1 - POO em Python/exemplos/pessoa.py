from liquidificador import Liquidificador


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def __str__(self):
        return f"""
{self.nome} - possui {self.saldo_na_conta} reais em sua conta.
        """


if __name__ == '__main__':
    liquidificador_preto = Liquidificador('Preto', 500, 220, 5350)
    pessoa_cozinheira = Pessoa('Jacquin', 10000)
    pessoa_cozinheira.comprar_liquidificador(liquidificador_preto)
    print(f'Agora o {pessoa_cozinheira.nome} \
tem um liquidificador {liquidificador_preto.cor}')
    print(pessoa_cozinheira)
