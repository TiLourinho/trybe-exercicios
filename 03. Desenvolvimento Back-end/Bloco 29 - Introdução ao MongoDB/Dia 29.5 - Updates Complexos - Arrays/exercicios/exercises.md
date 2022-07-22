# Exercícios

1 - Adicione a categoria **"superhero"** ao filme **Batman**:

```js
db.films.updateOne(
  { title: "Batman" },
  { $push: { category: "superhero" } },
);
```

2 - Utilizando o modificador **$each**, adicione as categorias **"villain"** e **"comic-based"** ao filme **Batman**:

```js
db.films.updateOne(
  { title: "Batman" },
  { $push: { category: { $each: ["villain", "comic-based"] } } },
);
```

3 - Remova a categoria **"action"** do filme **Batman**:

```js
db.films.updateOne(
  { title: "Batman" },
  { $pull: { category: "action" } },
);
```

4 - Remova o primeiro elemento do array **category** do filme **Batman**:

```js
db.films.updateOne(
  { title: "Batman" },
  { $pop: { category: -1 } },
);
```

5 - Remova o último elemento do array **category** do filme **Batman**:

```js
db.films.updateOne(
  { title: "Batman" },
  { $pop: { category: 1 } },
);
```

6 - Adicione o elemento **"action"** ao array **category** do filme **Batman**, garantindo que esse valor não se duplique:

```js
db.films.updateOne(
  { title: "Batman" },
  { $addToSet: { category: "action" } },
);
```

7 - Adicione a categoria **"90's"** aos filmes **Batman** e **Home Alone**:

```js
db.films.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $push: { category: "90's" } },
);
```

8 - Crie um array de documentos chamado **cast** para o filme **Home Alone** com os seguintes dados:

```js
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```

```js
db.films.updateOne(
  { title: "Home Alone" },
  { $push: { cast: { $each: [
    {
      "actor": "Macaulay Culkin",
      "character": "Kevin"
    },
    {
      "actor": "Joe Pesci",
      "character": "Harry"
    },
    {
      "actor": "Daniel Stern"
    },
  ] } } }
);
```

9 - Adicione o campo **character** com o valor **Marv** ao array de **cast** em que o campo **actor** seja igual a **Daniel Stern** no filme **Home Alone**:

```js
db.films.updateOne(
  { title: "Home Alone", "cast.actor": "Daniel Stern" },
  { $set: { "cast.$.character": "Marv" } },
);
```

10 - Crie um array de documentos chamado **cast** para o filme **Batman** com os seguintes dados:

```js
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```

```js
db.films.updateOne(
  { title: "Batman" },
  { $push: { cast: { $each: [
    {
      "character": "Batman"
    },
    {
      "character": "Alfred"
    },
    {
      "character": "Coringa"
    },
  ]}}},
);
```

11 - Produza três querys para o filme **Batman**:

- Adicione o campo **actor**, que deve ser um array com o valor **Christian Bale**, ao array de **cast** em que o campo **character** seja igual a **Batman**;
- Adicione o campo **actor**, que deve ser um array com o valor **Michael Caine**, ao array de **cast** em que o campo **character** seja igual a **Alfred**;
- Adicione o campo **actor**, que deve ser um array com o valor **Heath Ledger**, ao array de **cast** em que o campo **character** seja igual a **Coringa**.

```js
db.films.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  { $push: { "cast.$.actor": "Christian Bale" } },
);
```

```js
db.films.updateOne(
  { title: "Batman", "cast.character": "Alfred" },
  { $push: { "cast.$.actor": "Michael Caine" } },
);
```

```js
db.films.updateOne(
  { title: "Batman", "cast.character": "Coringa" },
  { $push: { "cast.$.actor": "Heath Ledger" } },
);
```

12 - Adicione aos atores de **cast** do **character Batman** do filme **Batman** os valores **"Michael Keaton"**, **"Val Kilmer"** e **"George Clooney"**, e deixe o array em ordem alfabética:

```js
db.films.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  { $push: { "cast.$.actor":
    {
      $each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
      $sort: 1,
    }}},
);
```
