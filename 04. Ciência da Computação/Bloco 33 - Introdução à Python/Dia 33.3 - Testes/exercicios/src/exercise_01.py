"""
Exercício: Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções:

    Números divisíveis por 3 deve aparecer como "Fizz" ao invés do número;
    Números divisíveis por 5 devem aparecer como "Buzz" ao invés do número;
    Números divisíveis por 3 e 5 devem aparecer como "FizzBuzz" ao invés do número.

    Exemplo: 3 -> [1, 2, "Fizz"].  # noqa
"""


def fizz_buzz(number):
    result = []

    for elem in range(1, number + 1):
        if elem % 3 == 0 and elem % 5 == 0:
            result.append('FizzBuzz')
        elif elem % 3 == 0:
            result.append('Fizz')
        elif elem % 5 == 0:
            result.append('Buzz')
        else:
            result.append(elem)

    return result


fizz_buzz(15)
