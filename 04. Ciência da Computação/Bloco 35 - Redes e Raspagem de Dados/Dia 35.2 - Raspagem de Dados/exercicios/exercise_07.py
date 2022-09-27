"""
Exercício: Faça o cálculo de quantos livros publicados (STATUS = PUBLISH)
temos em nosso banco de dados por categoria. Ordene-os de forma decrescente de
acordo com a quantidade.

    Saída:
        Java 95
        Internet 41
        Microsoft .NET 33
        Web Development 16
        Software Engineering 15
        Business 12
        Programming 12
        Client-Server 11
        Microsoft 8
        Theory 7
        ...

"""

from pymongo import MongoClient
from rich import print
import pymongo


with MongoClient() as client:
    db = client.library
    pipelines = [
        {'$match': {'status': 'PUBLISH'}},
        {'$unwind': '$categories'},
        {'$group': {'_id': '$categories', 'count': {'$sum': 1}}},
        {'$sort': {'count': pymongo.DESCENDING}}
    ]
    aggregate = db.books.aggregate(pipelines)

    for category in aggregate:
        print(f'Category: "{category["_id"]}" - {category["count"]}')
