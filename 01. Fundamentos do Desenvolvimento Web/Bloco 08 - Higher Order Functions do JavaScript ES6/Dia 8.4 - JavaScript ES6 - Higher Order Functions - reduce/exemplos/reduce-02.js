const { cervejas, clientes } = require('./dados');
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
// O método toLocaleString() retorna uma string com uma representação sensível a linguagem deste número.

// Verificar quantos clientes são maior de idade e quantos são menor de idade
// usando reduce

const clientesPorIdade = clientes.reduce(
  (accIdade, cliente) => {
    if (cliente.idade < 18) return { adulto: accIdade.adulto, menorIdade: accIdade.menorIdade + 1 };
    return { adulto: accIdade.adulto + 1, menorIdade: accIdade.menorIdade };
  },
  { adulto: 0, menorIdade: 0 }
);
console.log(clientesPorIdade);

// Retornar array com objetos contendo o código, descrição e o valor total em estoque
// para cada cerveja:
// valorEmEstoqueDeCervejas: [{codigo:176, descricao:Pilsner Urquell 500ML, valor_em_estoque: R$ 4.000,00}, {...}]

const valorEmEstoqueDeCervejas = cervejas.reduce((acc, cerveja) => {
  acc.push({
    codigo: cerveja.codigo,
    descricao: cerveja.descricao,
    valor_em_estoque: (cerveja.valor * cerveja.estoque).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }),
  });
  return acc;
}, []);
console.log(valorEmEstoqueDeCervejas);

// Separar as cervejas por fabricante

const cervejasPorFabricante = cervejas.reduce((acc, cerveja) => {
    if (Object.keys(acc).includes(cerveja.fabricante)) {
      acc[cerveja.fabricante] += `- ${cerveja.descricao}`;
    } else {
      acc[cerveja.fabricante] = cerveja.descricao;
    };
    return acc
  }, {});
console.log(cervejasPorFabricante);
