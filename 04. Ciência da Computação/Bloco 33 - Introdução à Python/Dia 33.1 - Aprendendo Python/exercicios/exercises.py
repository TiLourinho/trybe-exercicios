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


print(triangle_types(5, 5, 5))
print(triangle_types(3, 3, 5))
print(triangle_types(5, 6, 7))
