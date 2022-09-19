class Calculadora:
    def soma(self, x, y):
        return x + y


class CalculadoraDecorada:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converter_numero(self, numero):
        if not isinstance(numero, str):
            return numero
        return {
            "um": 1, "dois": 2, "três": 3, "quatro": 4, "cinco": 5,
            "seis": 6, "sete": 7, "oito": 8, "nove": 9, "dez": 10,
        }.get(numero)

    def soma(self, x, y):
        return self.calculadora.soma(
            self.converter_numero(x), self.converter_numero(y)
        )


class DecoratedCalculator:
    def __init__(self, calculator):
        self.calculator = calculator

    def convert_number(self, number):
        if not isinstance(number, str):
            return number
        return {
            "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
            "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        }.get(number)

    def soma(self, x, y):
        return self.calculator.soma(
            self.convert_number(x), self.convert_number(y)
        )


if __name__ == "__main__":
    calculadora = Calculadora()
    teste = calculadora.soma(10, 20)
    print(f'Calculadora: 10 + 20 = {teste}')

    calculadora_decorada = CalculadoraDecorada(calculadora)
    teste = calculadora_decorada.soma('oito', 'dois')
    print(f'Calculadora Decorada: "oito" + "dois" = {teste}')

    decorated_calculator = DecoratedCalculator(calculadora)
    test = decorated_calculator.soma('six', 'four')
    print(f'Decorated Calculator: "six" + "four" = {test}')
