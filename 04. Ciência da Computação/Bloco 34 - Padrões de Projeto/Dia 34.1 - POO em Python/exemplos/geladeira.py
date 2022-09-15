class Geladeira:
    def __init__(self, cor, capacidade, voltagem, qnt_de_portas, preco, marca):
        self.__cor = cor
        self.__capacidade = capacidade
        self.__voltagem = voltagem
        self.__qnt_de_portas = qnt_de_portas
        self.preco = preco
        self.__marca = marca
        self.__frost_free = True

    def __str__(self):
        return f"""
- Marca: {self.__marca};
- Cor: {self.__cor};
- Capacidade: {self.__capacidade} litros;
- Voltagem: {self.__voltagem} V;
- Portas: {self.__qnt_de_portas};
- Preço: R$ {self.__preco}.
        """


if __name__ == '__main__':
    geladeira_1 = Geladeira('Branca', 342, 220, 1, 2499, 'Consul')
    geladeira_2 = Geladeira('Preta', 443, 220, 2, 4149, 'Brastemp')
    geladeira_3 = Geladeira('Inox', 538, 220, 3, 12249, 'Electrolux')
