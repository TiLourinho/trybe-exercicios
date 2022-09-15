from abc import ABC, abstractmethod


PI = 3.14


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        result = self.lado ** 2

        return result

    def perimetro(self):
        result = 4 * self.lado

        return result


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        result = self.base * self.altura

        return result

    def perimetro(self):
        result = 2 * (self.base + self.altura)

        return result


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        result = PI * (self.raio ** 2)

        return result

    def perimetro(self):
        result = round(2 * PI * self.raio, 2)

        return result


quadrado = Quadrado(5)
retangulo = Retangulo(10, 5)
circulo = Circulo(5)

print(f'O quadrado com lado de {quadrado.lado} m tem uma área de {quadrado.area()} m² e {quadrado.perimetro()} m de perímetro.')  # noqa
print(f'O retângulo com {retangulo.base} m de base e {retangulo.altura} m de altura tem uma área de {retangulo.area()} m² e {retangulo.perimetro()} m de perímetro.')  # noqa
print(f'O círculo com {circulo.raio} m de raio tem uma área de {circulo.area()} m² e {circulo.perimetro()} m de perímetro.')  # noqa
