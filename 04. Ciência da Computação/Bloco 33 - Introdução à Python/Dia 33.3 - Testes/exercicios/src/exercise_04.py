from src.exercise_03 import email_validation

"""
Exercício: Baseado no exercício anterior, escreva uma função que, dado uma lista de emails,
deve retornar somente os emails válidos. Caso uma exceção ocorra, apenas a escreva na tela.

Exemplo: ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"] -> ["nome@dominio.com", "outro@dominio.com"].  # noqa
"""

EMAILS = ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]


def filter_invalid_emails(list):
    result = []

    for email in list:
        try:
            if email_validation(email):
                result.append(email)
        except ValueError as e:
            print(f'The email "{email}" is invalid! {e}')

    return result


filter_invalid_emails(EMAILS)
