"""
Exercício 5: Escreva um algoritmo recursivo que identifica
se um número é primo.
"""


def prime_number(n, i=2):
    if n == i:
        return True

    if n % i == 0:
        return False

    return prime_number(n, i + 1)


print(prime_number(431))
