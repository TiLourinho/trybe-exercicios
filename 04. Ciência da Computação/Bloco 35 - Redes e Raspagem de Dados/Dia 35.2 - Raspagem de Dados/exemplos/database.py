from pymongo import MongoClient


# client = MongoClient('mongodb://localhost:30000/')
# client = MongoClient()
# db = client.catalogue

# books = [
#     {
#         "title": "A Light in the Attic",
#     },
#     {
#         "title": "Tipping the Velvet",
#     },
#     {
#         "title": "Soumission",
#     },
# ]
# db.books.insert_many(books)

# print(db.books.find_one())
# t_books = db.books.find({"title": {"$regex": "t"}})

# for book in t_books:
#     print(book["title"])

# client.close()

with MongoClient() as client:
    db = client.catalogue
    t_books = db.books.find({"title": {"$regex": "t"}})

    for book in t_books:
        print(book["title"])
