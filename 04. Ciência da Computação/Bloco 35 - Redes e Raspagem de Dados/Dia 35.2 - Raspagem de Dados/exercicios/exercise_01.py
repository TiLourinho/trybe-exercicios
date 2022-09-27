"""
Exercício: Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu conteúdo de forma legível.
"""  # noqa

from rich import print
import requests


response = requests.get('https://httpbin.org/encoding/utf8')
print(response.text)
