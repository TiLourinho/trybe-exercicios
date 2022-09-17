from abc import ABC, abstractmethod


class ImpostoStrat(ABC):
    @abstractmethod
    def calcular_imposto(valor):
        raise NotImplementedError


class ISS(ImpostoStrat):
    @staticmethod
    def calcular_imposto(valor):
        result = valor * 0.1
        return result


class ICMS(ImpostoStrat):
    @staticmethod
    def calcular_imposto(valor):
        result = valor * 0.06
        return result


class PIS(ImpostoStrat):
    @staticmethod
    def calcular_imposto(valor):
        result = valor * 0.0065
        return result


class COFINS(ImpostoStrat):
    @staticmethod
    def calcular_imposto(valor):
        result = valor * 0.03
        return result


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular(self, imposto):
        result = imposto.calcular_imposto(self.valor)
        return result


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular(ISS)}")
print(f"ICMS: {orcamento.calcular(ICMS)}")
print(f"PIS: {orcamento.calcular(PIS)}")
print(f"COFINS: {orcamento.calcular(COFINS)}")
