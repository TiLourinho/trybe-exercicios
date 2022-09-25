from rich import print
import requests


response = requests.get('https://www.betrybe.com/')
print('Código de status: ', response.status_code)
print('Conteúdo no formato HTML: ', response.headers['Content-Type'])
# print('Conteúdo recebido da requisição: ', response.text)
# print('Bytes recebidos como resposta: ', response.content)

response = requests.post('http://httpbin.org/post', data='some content')
print(response.text)

# Requisição enviando cabeçalho (header)
response = requests.get('http://httpbin.org/get', headers={'Accept': 'application/json'})  # noqa
print(response.text)

# Requisição a recurso binário
response = requests.get('http://httpbin.org/image/png')
# print(response.content)

# Recurso JSON
response = requests.get('http://httpbin.org/get')
print(response.json())  # Equivalente ao json.loads(response.content)

# Podemos pedir que a resposta lance uma exceção caso o status não seja OK
response = requests.get('http://httpbin.org/status/404')
response.raise_for_status()
