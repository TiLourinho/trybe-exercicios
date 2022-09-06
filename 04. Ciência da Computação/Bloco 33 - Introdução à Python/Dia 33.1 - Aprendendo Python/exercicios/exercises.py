import math

""" Exercícios """

"""
1 - Crie uma função que receba dois números e retorne o maior deles.
"""


def compare_numbers(x, y):
    result = x if x > y else y
    return result


print(compare_numbers(10, 12))  # 12

"""
2 - Calcule a média aritmética dos valores contidos em uma lista.
"""

NUMBERS = [4.5, 6, 8, 9.5, 7]


def average(list):
    sum = 0

    for number in list:
        sum += number

    result = sum / len(list)
    return result


print(average(NUMBERS))  # 7.0

"""
3 - Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.  # noqa
"""


def asterisks_square(n):
    for number in range(n):
        print(n * '* ')


print(asterisks_square(5))

"""
4 - Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres.
Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".  # noqa
"""

NAMES = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggest_name(list):
    biggest_name = ''

    for name in list:
        if len(name) > len(biggest_name):
            biggest_name = name

    return biggest_name


print(biggest_name(NAMES))

"""
5 - Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas
e o preço total a partir do tamanho de uma parede(em m²).  # noqa
"""


def paint_cans(square_meters):
    liters = square_meters / 3
    cans = math.ceil(liters / 18)
    price_per_can = 80
    total_price = cans * price_per_can

    result = cans, total_price
    return result


print(paint_cans(500))

"""
6 - Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo",
caso não seja possível formar um triângulo.  # noqa

  Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
  Triângulo Equilátero: três lados iguais;
  Triângulo Isósceles: quaisquer dois lados iguais;
  Triângulo Escaleno: três lados diferentes.

"""


def triangle_types(a, b, c):
    if a != b != c:
        print('Triângulo Escaleno')
    elif a == b == c:
        print('Triângulo Equilátero')
    elif a == b != c or a != b == c or a == c != b:
        print('Triângulo Isósceles')
    else:
        print('Não é triângulo!')


print(triangle_types(5, 5, 5))  # 'Triângulo Equilátero'
print(triangle_types(3, 3, 5))  # 'Triângulo Isósceles'
print(triangle_types(5, 6, 7))  # 'Triângulo Escaleno'

""" Bônus """

"""
1 - Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.  # noqa
"""

NUMBERS_LIST = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def smallest_number(list):
    result = min(list)
    return result


print(smallest_number(NUMBERS_LIST))

"""
2 - Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base.
Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base.  # noqa
"""


def asterisks_triangle(n):
    for number in range(1, n + 1):
        print(number * '* ')


print(asterisks_triangle(5))

"""
3 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Por exemplo, para N = 5, o valor esperado será 15.  # noqa
"""


def sum(n):
    result = 0

    for number in range(n + 1):
        result += number

    return result


print(sum(5))  # 15

"""
4 - Um posto está vendendo combustíveis com a seguinte tabela de descontos:

  Álcool:
    - Até 20 litros, desconto de 3% por litro;
    - Acima de 20 litros, desconto de 5% por litro.
  Gasolina:
    - Até 20 litros, desconto de 4% por litro;
    - Acima de 20 litros, desconto de 6% por litro.

Escreva uma função que receba o número de litros vendidos,
o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina),
e retorne o valor a ser pago pelo cliente,
sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.  # noqa
"""


def gas_price(liters, type):
    alcohol_price = 1.90
    gasoline_price = 2.50

    if type == 'A':
        if 0 < liters <= 20:
            alcohol_price -= alcohol_price * 0.03
        else:
            alcohol_price -= alcohol_price * 0.05

        result = round(liters * alcohol_price, 2)
        return result

    if type == 'G':
        if 0 < liters <= 20:
            gasoline_price -= gasoline_price * 0.04
        else:
            gasoline_price -= gasoline_price * 0.06

        result = round(liters * gasoline_price, 2)
        return result


print(gas_price(45, 'A'))  # 81.22
print(gas_price(15, 'A'))  # 27.64
print(gas_price(45, 'G'))  # 106
print(gas_price(15, 'G'))  # 36
