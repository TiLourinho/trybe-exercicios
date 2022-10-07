"""
Exercício 2: Transforme o algoritmo criado no exercício 1 em recursivo.
"""


def recursive_even_numbers(n):
    if n == 1:
        return 0

    if n % 2 == 0:
        return 1 + recursive_even_numbers(n - 1)
    return recursive_even_numbers(n - 1)


print(recursive_even_numbers(10))
