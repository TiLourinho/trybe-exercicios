"""
Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista,
o maior número inteiro.
"""


def recursive_biggest_number(list):
    if len(list) < 2:
        return list[0]

    if list[0] > list[1]:
        list.pop(1)
        return recursive_biggest_number(list)
    list.pop(0)
    return recursive_biggest_number(list)


print(recursive_biggest_number([4, 3, 6, 9, 5]))
