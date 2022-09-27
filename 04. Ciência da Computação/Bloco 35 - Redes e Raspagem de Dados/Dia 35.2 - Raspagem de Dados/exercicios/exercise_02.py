"""
Exercício: Faça uma requisição ao recurso usuários da API do Github (https://api.github.com/users),
exibindo o username e url de todos os usuários retornados.

    mojombo https://api.github.com/users/mojombo
    defunkt https://api.github.com/users/defunkt
    pjhyett https://api.github.com/users/pjhyett
    wycats https://api.github.com/users/wycats
    ...

"""  # noqa

from rich import print
import json
import requests


response = requests.get('https://api.github.com/users')
content = json.loads(response.text)

for user in content:
    print(f'Login: "{user["login"]}", URL: {user["url"]}')
