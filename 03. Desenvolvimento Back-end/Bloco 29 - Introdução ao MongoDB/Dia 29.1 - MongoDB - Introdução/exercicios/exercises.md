# Exercícios

1 - Retorne o documento com o **_id** igual a 8:

```js
db.bios.find({ _id: 8 });
```

2 - Retorne o documento com o **_id** igual a 8, mas só exiba os atributos **_id** e **name**:

```js
db.bios.find({ _id: 8 }, { name: 1 });
```

3 - Retorne apenas os atributos **name** e **birth** do documento com o **_id** igual a 8:

```js
db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 });
```

4 - Retorne todos os documentos em que o atributo **name.first** seja igual a John, utilizando o método **pretty()**:

```js
db.bios.find({ "name.first": "John" }).pretty();
```

5 - Retorne os 3 primeiros documentos da coleção bios utilizando o método **pretty()**:

```js
db.bios.find().limit(3).pretty();
```

6 - Retorne 2 documentos da coleção **bios** pulando os 5 primeiros documentos:

```js
db.bios.find().skip(5).limit(2);
```

7 - Retorne a quantidade de documentos da coleção **books**:

```js
db.books.countDocuments({});
```

8 - Conte quantos livros existem com o **status = "PUBLISH"**:

```js
db.books.countDocuments({ status: "PUBLISH" });
```

9 - Exiba os atributos **title**, **isbn** e **pageCount** dos 3 primeiros livros. NÃO retorne o atributo **_id**:

```js
db.books.find({}, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3);
```

10 - Pule 5 documentos e exiba os atributos **_id**, **title**, **authors** e **status** dos livros com o **status = "MEAP"**, limitando-se a 10 documentos

```js
db.books.find({}, { title: 1, authors: 1, status: "MEAP" }).skip(5).limit(10);
```
