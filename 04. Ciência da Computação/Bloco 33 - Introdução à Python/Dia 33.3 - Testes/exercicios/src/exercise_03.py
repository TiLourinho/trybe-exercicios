"""
Exercício: Faça uma função que valide um e-mail, lançando uma exceção quando o valor for inválido.
Endereços de e-mail válidos devem seguir as seguintes regras:

    - Devem seguir o formato nomeusuario@nomewebsite.extensao;
    - O nome de usuário deve conter somente letras, dígitos, traços e underscores (_);
    - O nome de usuário deve iniciar com uma letra;
    - O nome do website deve conter somente letras e dígitos;
    - O tamanho máximo da extensão é de 3 caracteres.  # noqa
"""


def email_validation(email):
    if email[0].isdigit():
        raise ValueError('Email prefix must start with letters only.')

    prefix, domain = email.split('@')
    domain, extension = domain.split('.')

    for letter in prefix:
        if not letter.isdigit() and not letter.isalpha() and letter not in ['-', '_']:  # noqa
            raise ValueError('Email prefix should only contain letters, numbers, hyphens and underscores.')  # noqa

    for letter in domain:
        if not letter.isdigit() and not letter.isalpha():
            raise ValueError('Email domain should only contain letters and numbers.')  # noqa

    if len(extension) > 3:
        raise ValueError('Email domain suffix must be up to 3 characters.')

    return True


email_validation('xablau@xablau.com')
