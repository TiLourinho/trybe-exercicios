from rich import print
import random
import json
import csv


""" Exercícios """


"""
1 - Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.  # noqa
"""


def inverted_stairs(name):
    for letter in range(len(name)):
        print(name)
        name = name[:-1]


# print(inverted_stairs("Tiago"))

"""
2 - Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra
que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente.
O jogador terá três tentativas para adivinhar a palavra.
Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.  # noqa
"""


def get_words():
    file = open('words.txt', mode='r')
    content = file.read().split()

    WORDS = []

    for word in content:
        WORDS.append(word)

    file.close()
    return WORDS


def scrambled_word_game():
    WORDS = get_words()
    print(WORDS)

    random_word = random.choice(WORDS)

    scrambled_word = ''.join(random.sample(random_word, len(random_word)))
    rounds = 3

    print('\n##### PALAVRA EMBARALHADA #####\n')

    while rounds > 0:
        print(f'A palavra escolhida é: {scrambled_word}')
        print(f'Você tem {rounds} chances!\n')

        player_attempt = input('Digite o seu palpite: ').upper()

        if player_attempt == random_word:
            print(f'Parabéns! Você acertou! A palavra era {random_word}!\n')
            break
        else:
            print('Você errou! Que pena.\n')
            rounds -= 1

    WORDS.remove(random_word)
    try_again = input('Você quer jogar novamente? Digite "S" se sim e "N" se não: ').upper()  # noqa

    if try_again == 'S':
        scrambled_word_game()
    else:
        quit()


# scrambled_word_game()

"""
3 - Modifique o exercício anterior para que as palavras sejam lidas de um arquivo.
Considere que o arquivo terá cada palavra em uma linha.  # noqa
"""

# print(get_words())

"""
4 - Dado o seguinte arquivo books.json, leia seu conteúdo e calcule a porcentagem de livros em cada
categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.  # noqa

    Saída:
    categoria,porcentagem
    Python,0.23201856148491878
    Java,0.23201856148491878
    PHP,0.23201856148491878

"""


def import_books(path_file):
    with open(path_file) as file:
        content = json.load(file)
        return content


def books_percentage(books, total):
    calc = (books * 100) / total
    result = round(calc, 2)
    return result


def export_data(report, headers):
    with open('books_report.csv', 'w', encoding='utf-8') as books_report_file:
        writer = csv.DictWriter(books_report_file, fieldnames=headers)
        writer.writeheader()

        for type, percentage in report.items():
            row = {'categoria': type, 'porcentagem': percentage}
            writer.writerow(row)


def subjects_percentage():
    content = import_books('books.json')

    python_books = 0
    java_books = 0
    php_books = 0
    total_books = len(content)

    report = dict()

    for book in content:
        if 'Python' in book['categories']:
            python_books += 1
        if 'Java' in book['categories'] or 'java' in book['categories']:
            java_books += 1
        if 'PHP' in book['categories']:
            php_books += 1

    report['Python'] = books_percentage(python_books, total_books)
    report['Java'] = books_percentage(java_books, total_books)
    report['PHP'] = books_percentage(php_books, total_books)

    headers = ['categoria', 'porcentagem']

    export_data(report, headers)


subjects_percentage()


""" Bônus """


"""
5 - Utilizando o arquivo pokemons.json, vamos escrever um programa que sorteie um pokemon aleatoriamente.
O programa deve perguntar à pessoa usuária "Quem é esse pokemon?" até que ela o acerte. A cada erro,
apresente um número de letras do nome daquele pokemon igual ao número de erros.

Exemplo: O pokemon sorteado pelo programa é butterfree; a pessoa usuária chuta charizard; o programa deve exibir b.
Em seguida, a pessoa chuta blastoise; o programa deve exibir bu; e assim por diante até a pessoa acertar.  # noqa
"""


def get_pokemon(path_file):
    with open(path_file) as file:
        content = json.load(file)['results']
        return content


def guess_the_pokemon():
    pokedex = get_pokemon('pokemons.json')
    random_pokemon = random.choice(pokedex)['name']

    print('\nAcabamos de sortear um pokémon e você deve adivinhar qual foi \o/')  # noqa

    counter = 0
    tip = ''

    while counter < len(random_pokemon):
        user_guess = input('Quem é esse pokémon? ')

        if user_guess == random_pokemon:
            print('Parabéns! Você adivinhou o pokémon!')
            break
        else:
            print('\nVocê errou!\nVamos dar uma letra do nome como dica:\n')  # noqa
            tip += random_pokemon[counter]
            print(f'O nome desse pokémon é: {tip}\n')
            counter += 1

    print('Poxa, não foi dessa vez!')
    try_again = input('Você quer jogar novamente?\nDigite "S" se sim e "N" se não: ')  # noqa

    guess_the_pokemon() if try_again == 'S' else quit()


# guess_the_pokemon()
