"""
Exercício 6: Escreva um algoritmo que recebe uma lista
e retorne-a na ordem reversa.
"""


def reverse_order(list):
    if len(list) <= 1:
        return list

    result = [list[-1]] + reverse_order(list[:-1])
    return result


print(reverse_order([1, 2, 3, 4, 5]))
