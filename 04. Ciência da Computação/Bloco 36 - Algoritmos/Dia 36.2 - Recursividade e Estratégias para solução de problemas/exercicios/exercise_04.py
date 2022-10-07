"""
Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor
comum (mdc) de dois inteiros.
"""


def greatest_common_divisor(n1, n2):
    if n2 == 0:
        return n1
    return greatest_common_divisor(n2, n1 % n2)


print(greatest_common_divisor(12, 18))
