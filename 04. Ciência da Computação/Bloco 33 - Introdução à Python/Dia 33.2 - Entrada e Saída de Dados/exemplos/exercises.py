""" Entrada e Saída de Dados """

"""
Exercício 1 - Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical:  # noqa
"""


def vertical_print():
    name = input('Qual é o seu nome? ')

    for letter in name:
        print(letter)


# print(vertical_print())

"""
Exercício 2 - Escreva um programa que receba vários números naturais e calcule a soma desses valores.
Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na
saída de erros no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido".
Ao final, você deve imprimir a soma dos valores válidos.  # noqa
"""


def sum():
    values = input('Digite alguns valores separando-os com espaços: ')
    splitted_values = values.split()
    print(splitted_values)
    result = 0

    for number in splitted_values:
        if not number.isdigit():
            print(f'Erro ao somar valores, "{number}" é um valor inválido.')
        else:
            result += int(number)

    print(result)


# print(sum())

"""
Exercício 3 - Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:  # noqa

1. lê todas essas informações;
2. aplique um filtro, mantendo somente as pessoas que estão reprovadas;
3. escreva seus nomes em outro arquivo.

Considere que a nota miníma para aprovação é 6.
"""

flunk_students = []

with open('students.txt', mode='r') as grades_file:
    for student in grades_file:
        student_grade = student.split(' ')
        if int(student_grade[1][:2]) < 6:
            flunk_students.append(f'{student_grade[0]}\n')


with open('flunk_students.txt', mode='w') as flunk_file:
    flunk_file.writelines(flunk_students)
