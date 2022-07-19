# Exercícios

1 - Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes:

```js
supervision().activate;
```

2 - Selecione todos os super-heróis com **menos** de **1.80m** de altura. Lembre-se de que essa informação está em centímetros:

```js
db.superheroes.find({ "aspects.height": { $lt: 180 } });
```

3 - Retorne o total de super-heróis **menores** que **1.80m**:

```js
db.superheroes.countDocuments({ "aspects.height": { $lt: 180 } });
```

4 - Retorne o total de super-heróis com **até 1.80m**:

```js
db.superheroes.countDocuments({ "aspects.height": { $lte: 180 } });
```

5 - Selecione um super-herói com **2.00m ou mais** de altura:

```js
db.superheroes.findOne({ "aspects.height": { $gte: 200 } });
```

6 - Retorne o total de super-heróis com **2.00m ou mais**:

```js
db.superheroes.find({ "aspects.height": { $gte: 200 } });
```

7 - Selecione todos os super-heróis que têm **olhos verdes**:

```js
db.superheroes.find({ "aspects.eyeColor": "green" });
```

8 - Retorne o total de super-heróis com **olhos azuis**:

```js
db.superheroes.countDocuments({ "aspects.eyeColor": "blue" });
```

9 - Utilizando o operador **$in**, selecione todos os super-heróis com **cabelos pretos ou carecas** (**"No Hair"**):

```js
db.superheroes.find({ "aspects.hairColor": { $in: ["Black", "No Hair"] } });
```

10 - Retorne o total de super-heróis com **cabelos pretos ou carecas** (**"No Hair"**):

```js
db.superheroes.countDocuments({ "aspects.hairColor": { $in: ["Black", "No Hair"] } });
```

11 - Retorne o total de super-heróis que **não** tenham **cabelos pretos** ou **não** sejam **carecas**:

```js
db.superheroes.countDocuments({ "aspects.hairColor": { $nin: ["Black", "No Hair"] } });
```

12 - Utilizando o operador **$not**, retorne o total de super-heróis que **não** tenham mais de **1.80m** de altura:

```js
db.superheroes.countDocuments({ "aspects.height": { $not: { $gt: 180 } } });
```

13 - Selecione todos os super-heróis que **não** sejam **humanos nem** sejam maiores do que **1.80m**:

```js
db.superheroes.find({ $nor: [{ race: "Human" }, { "aspects.height": { $gt: 180 } }] });
```

14 - Selecione todos os super-heróis com **1.80m** ou **2.00m** de altura e que **sejam publicados** pela **Marvel Comics**:

```js
db.superheroes.find({ $and: [{ $or: [{ "aspects.height": 180 }, { "aspects.height": 200 }] }, { publisher: "Marvel Comics" }] });
```

15 - Selecione todos os super-heróis que **pesem** entre **80kg** e **100kg**, sejam **Humanos** ou **Mutantes** e **não sejam publicados** pela **DC Comics**:

```js
db.superheroes.find({
  $and: [
    { "aspects.weight": { $gte: 80, $lte: 100 } },
    { $or: [{ race: "Human" }, { race: "Mutant" }] },
    { publisher: { $ne: "DC Comics" } },
  ],
});
```

16 - Retorne o total de documentos que **não** contêm o campo **race**:

```js
db.superheroes.countDocuments({ race: { $exists: false } });
```

17 - Retorne o total de documentos que **contêm** o campo **hairColor**:

```js
db.superheroes.countDocuments({ "aspects.hairColor": { $exists: true } });
```

18 - Remova **apenas um** documento publicado pela **Sony Pictures**:

```js
db.superheroes.deleteOne({ publisher: "Sony Pictures" });
```

19 - Remova todos os documentos **publicados** pelo **George Lucas**:

```js
db.superheroes.deleteMany({ publisher: "George Lucas" });
```
