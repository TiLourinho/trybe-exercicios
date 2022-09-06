""" Operações Básicas """

"""
Exercício 1: Inicialize duas variáveis a e b, sendo a = 10 e b = 5.
Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação,
divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.
"""

a = 10
b = 5

print(a + b)  # 15
print(a - b)  # 5
print(a * b)  # 50
print(a / b)  # 2.0
print(a // b)  # 2
print(a**b)  # 100000
print(a % b)  # 0

"""
Exercício 2: Declare e inicialize uma variável: hours = 6.
Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize
variáveis minutes e seconds que recebem os respectivos resultados das contas.
Depois, imprima cada uma delas.
"""

hours = 6
minutes = hours * 60
seconds = minutes * 60

print(f"Hours: {hours} - Minutes: {minutes} - Seconds: {seconds}")

"""
Exercício 3: Teste e verifique o que acontece se você colocar um ponto e
vírgula no final de uma instrução em Python.
"""

teste = True
print("Teste")

# É possível usar ";", mas o Flake xaropa

"""
Exercício 4: Suponha que o preço de capa de um livro seja R$ 24,20, mas as
livrarias recebem um desconto de 40%.
O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada
exemplar adicional.
Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que
receba o custo total e a imprima.
"""
book_price = 24.20
discount = 0.4
quantity = 60

book_cost = (book_price - (book_price * discount)) * quantity
logistics_cost = 3 + (0.75 * (quantity - 1))
total_cost = book_cost + logistics_cost

print(total_cost)


""" Variáveis Compostas """

trybe_course = ["Introdução", "Front-end", "Back-end"]

"""
Exercício 5: Adicione o elemento "Ciência da Computação" à lista.
"""

trybe_course.append("Ciência da Computação")

"""
Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".
"""

trybe_course[0] = "Fundamentos"

print(trybe_course)
# ['Fundamentos', 'Front-end', 'Back-end', 'Ciência da Computação']

"""
Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o
método set().
Inicialize uma variável com essa função var = set() e adicione seu nome ao
conjunto utilizando um dos métodos vistos acima.
Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.
"""

var = set()
var.add("Tiago")

print(var)  # {'Tiago'}

"""
Exercício 8: Insira no objeto uma nova propriedade com o nome de chave
"recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
"""

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "Sim"

print(info)
# {'personagem': 'Margarida', 'origem': 'Pato Donald', 'nota': 'Namorada do personagem principal nos quadrinhos do Pato Donald', 'recorrente': 'Sim'}  # noqa

"""
Exercício 9: Remova a propriedade cuja chave é "origem"
e imprima o objeto no console.
"""

del info["origem"]

print(info)
# {'personagem': 'Margarida', 'nota': 'Namorada do personagem principal nos quadrinhos do Pato Donald', 'recorrente': 'Sim'}  # noqa

"""
Exercício 10: Após uma consulta do banco de dados, temos linhas que contém
nome, sobrenome e idade como: "Thiago", "Nobre", 29.
Que estrutura vista anteriormente seria recomendada dado que após esta
consulta somente exibimos estes valores?
"""

"A estrutura recomendada é a tuple. Caso houvesse necessidade de editar os valores ou adicionar mais valores, usaríamos uma list."  # noqa

"""
Exercício 11: Realizar a contagem de quantas vezes cada elemento aparece em
uma sequência é uma técnica muito útil na solução de alguns problemas.
Qual é a estrutura mais recomendada para o armazenamento desta contagem?
"""

"A estrutura mais adequada é a dict, pois conseguimos armazenar o elemento da lista como chave e a quantidade de vezes que ele aparece como valor da chave."  # noqa

"""
Exercício 12: O Fatorial de um número inteiro é representado pela
multiplicação de todos os números predecessores maiores que 0.
Por exemplo, o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5.
Escreva um código que calcule o fatorial de um número inteiro.
"""

number = 5
result = 1
for index in range(1, (number + 1)):
    result *= index

print(result)  # 120

"""
Exercício 13: Um sistema de avaliações registra valores de 0 a 10 para cada
avaliação. Após algumas mudanças estes valores precisam ser ajustados para
avaliações de 0 a 100. Dado uma sequência de
avaliações ratings = [6, 8, 5, 9, 10]. Escreva um código capaz de gerar as
avaliações após a mudança. Neste caso o resultado
deveria ser [60, 80, 50, 90, 100].
Experimente utilizar a sintaxe de compreensão de listas.
"""

ratings = [6, 8, 5, 9, 10]
new_ratings = [num * 10 for num in ratings]

print(new_ratings)  # [60, 80, 50, 90, 100]

"""
Exercício 14: Percorra a lista do exercício 13 e imprima
"Múltiplo de 3" se o elemento for divisível por 3.
"""

for num in new_ratings:
    if num % 3 == 0:
        print(f"{num} é múltiplo de 3")

# 60 é múltiplo de 3
# 90 é múltiplo de 3
