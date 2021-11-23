// array.filter
// 1.

const cities = [
  { state: 'AM', name: 'Manaus', region: 'N'},
  { state: 'PA', name: 'Belém', region: 'N'},
  { state: 'TO', name: 'Porto Nacional', region: 'N'},
  { state: 'MG', name: 'Nepomuceno', region: 'SE'},
  { state: 'BA', name: 'Cachoeira', region: 'NE'},
  { state: 'PR', name: 'Curitiba', region: 'S'},
  { state: 'SP', name: 'Hortolândia', region: 'SE'},
  { state: 'RN', name: 'Touros', region: 'NE'},
  { state: 'CE', name: 'Jericoacoara', region: 'NE'},
  { state: 'TO', name: 'Três Pedras', region: 'N'},
  { state: 'MG', name: 'João Pinheiro', region: 'SE'},
];

// a.
// Encontre todas as cidades da região Nordeste (NE)

// Com for:
// const citiesNE = [];

// for (let index = 0; index < cities.length; index += 1) {
//   const city = cities[index];
  
//   if (city.region === 'NE'){
//     citiesNE.push(city.name);
//   }
// };
// console.log(citiesNE);

// Com filter:
const citiesNE = cities.filter((city) => city.region === 'NE');
console.log(citiesNE);

// b.
// Encontre todas as cidades do estado de Tocantins (TO)

const citiesTO = cities.filter((city) => city.state === 'TO');
console.log(citiesTO);

// c.
// Encontre todas as cidades que terminam com a letra "a"

const citiesNames = [
  'Manaus',
  'Belém',
  'Porto Nacionaal',
  'Nepomuceno',
  'Cachoeira',
  'Curitiba',
  'Hortolândia',
  'Touros',
  'Jericoacoara',
  'Três Pedras',
  'João Pinheiro'
];

const citiesEndingWithA = citiesNames.filter((name) => name.endsWith('a'));
console.log(citiesEndingWithA);

// array.map
// 1.

const cities = [
  { state: 'AM', name: 'Manaus', region: 'N'},
  { state: 'PA', name: 'Belém', region: 'N'},
  { state: 'TO', name: 'Porto Nacional', region: 'N'},
  { state: 'MG', name: 'Nepomuceno', region: 'SE'},
  { state: 'BA', name: 'Cachoeira', region: 'NE'},
  { state: 'PR', name: 'Curitiba', region: 'S'},
  { state: 'SP', name: 'Hortolândia', region: 'SE'},
  { state: 'RN', name: 'Touros', region: 'NE'},
  { state: 'CE', name: 'Jericoacoara', region: 'NE'},
  { state: 'TO', name: 'Três Pedras', region: 'N'},
  { state: 'MG', name: 'João Pinheiro', region: 'SE'},
];

// Transforme (mapeie) o array de objetos cities em um array de strings com o seguinte formato:
// `${nomeDaCidade} ${siglaDoEstado}`
// Manaus - AM

// Com for:
// const citiesAndStates = [];

// for (let index = 0; index < cities.length; index += 1) {
//   const city = cities[index];
//   const string = `${city.name} - ${city.state}`;

//   citiesAndStates.push(string);
// }
// console.log(citiesAndStates);

// Com map:
const citiesAndStates = cities.map((city) => {
  const string = `${city.name} - ${city.state}`;
  return string;
});
console.log(citiesAndStates);

// 2.

const states = [
  { short: 'AM', name: 'Amazonas' },
  { short: 'PA', name: 'Pará' },
  { short: 'TO', name: 'Tocantins' },
  { short: 'MG', name: 'Minas Gerais' },
  { short: 'BA', name: 'Bahia' },
  { short: 'PR', name: 'Paraná' },
  { short: 'SP', name: 'São Paulo' },
  { short: 'RN', name: 'Rio Grande do Norte' },
  { short: 'CE', name: 'Ceará' },
];

const regions = [
  { short: 'N', name: 'Norte' },
  { short: 'NE', name: 'Nordeste' },
  { short: 'CW', name: 'Centro-oeste' },
  { short: 'SE', name: 'Sudeste' },
  { short: 'S', name: 'Sul' },
];

const cities = [
  { state: 'AM', name: 'Manaus', region: 'N'},
  { state: 'PA', name: 'Belém', region: 'N'},
  { state: 'TO', name: 'Porto Nacional', region: 'N'},
  { state: 'MG', name: 'Nepomuceno', region: 'SE'},
  { state: 'BA', name: 'Cachoeira', region: 'NE'},
  { state: 'PR', name: 'Curitiba', region: 'S'},
  { state: 'SP', name: 'Hortolândia', region: 'SE'},
  { state: 'RN', name: 'Touros', region: 'NE'},
  { state: 'CE', name: 'Jericoacoara', region: 'NE'},
  { state: 'TO', name: 'Três Pedras', region: 'N'},
  { state: 'MG', name: 'João Pinheiro', region: 'SE'},
];

// Transforme (mapeie) o array de objetos cities em um array de strings com o seguinte formato:
// `A cidade de ${nomeDaCidade} fica no estado de ${siglaDoEstado}`

const citiesAndStates = cities.map((city) => {
  const state = states.find((state) => {
    return state.short === city.state;
  });
  const string = `A cidade de ${city.name} fica no estado de ${state.name}`;
  return string;
});
console.log(citiesAndStates);