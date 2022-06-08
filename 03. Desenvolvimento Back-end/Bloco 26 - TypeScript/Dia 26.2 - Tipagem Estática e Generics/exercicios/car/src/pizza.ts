type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

// const calabreza = {
//   flavor: 'Calabreza',
//   slices: 8,
// };

// const marguerita = {
//   flavor: 'Marguerita',
//   slices: 6,
// };

// const nutella = {
//   flavor: 'Nutella',
//   slices: 4,
// };

// console.log(calabreza, marguerita, nutella);

type Common = 'Calabreza' | 'Frango' | 'Pepperoni';
type Vegeterian = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Sugar = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface CommonPizza extends Pizza {
  flavor: Common;
};

interface VegeterianPizza extends Pizza {
  flavor: Vegeterian;
};

interface SugarPizza extends Pizza {
  flavor: Sugar;
};

const calabreza: CommonPizza = {
  flavor: 'Calabreza',
  slices: 8,
};

const frango: CommonPizza = {
  flavor: 'Frango',
  slices: 6,
};

const pepperoni: CommonPizza = {
  flavor: 'Pepperoni',
  slices: 4,
};

const palmito: VegeterianPizza = {
  flavor: 'Palmito',
  slices: 6,
};

const cogumelo: VegeterianPizza = {
  flavor: 'Cogumelo',
  slices: 4,
};

const marshmallow: SugarPizza = {
  flavor: 'Marshmallow',
  slices: 4,
};

console.log(calabreza, frango, pepperoni, palmito, cogumelo, marshmallow);