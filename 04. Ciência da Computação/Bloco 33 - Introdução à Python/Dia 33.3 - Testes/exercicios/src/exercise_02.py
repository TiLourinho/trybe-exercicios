"""
Exercício: Em alguns lugares é comum lembrar um número do telefone associando seus dígitos a letras.
Dessa maneira, a expressão MY LOVE significa 69 5683. Claro que existem alguns problemas, uma vez
que alguns números de telefone não formam uma palavra ou uma frase, e os dígitos 1 e 0 não estão
associados a nenhuma letra. Sua tarefa é ler uma expressão e encontrar o número de telefone correspondente
baseado na tabela abaixo. Uma expressão é composta por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.

    Letras  ->  Número
    ABC     ->  2
    DEF     ->  3
    GHI     ->  4
    JKL     ->  5
    MNO     ->  6
    PQRS    ->  7
    TUV     ->  8
    WXYZ    ->  9

Verifique casos como entrada maior que 30 caracteres, vazia e com caracteres inválidos.  # noqa
"""


def string_to_phone_number(string):
    if not 1 < len(string) <= 30:
        raise ValueError('The expression has an invalid length')

    result = ''

    for letter in string:
        if letter in 'ABC':
            result += '2'
        elif letter in 'DEF':
            result += '3'
        elif letter in 'GHI':
            result += '4'
        elif letter in 'JKL':
            result += '5'
        elif letter in 'MNO':
            result += '6'
        elif letter in 'PQRS':
            result += '7'
        elif letter in 'TUV':
            result += '8'
        elif letter in 'WXYZ':
            result += '9'
        elif letter in '01-':
            result += letter
        else:
            raise ValueError('The expression has invalid characters')

    return result


print(string_to_phone_number('MY-LOVE'))
