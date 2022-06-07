// Type Aliases
type Bird = {
  wings: number;
  feet: number;
  beak: number;
};

type Sum = {
  x: number;
  y: number;
};

const sum = (st: Sum) => {
  return st.x + st.y;
};

type Address = {
  street: string;
  number: number;
  district: string;
  city: string;
  state: string;
}

// Type Unions
type StatesOfMatter = 'gaseous' | 'liquid' | 'solid';

type CPF = string | number;

type OS = 'Linux' | 'Windows' | 'Mac';

type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';

// Classes
class Dog {
  _name: string;
  _color: string;
  _race: string;
  _age: number;

  constructor(name: string, color: string, race: string, age: number) {
    this._name = name;
    this._color = color;
    this._race = race;
    this._age = age;
  };

  toBark(): void {
    console.log('Woof woof');
  };
};

class House {
  _address: string;
  _color: string;
  _owner: string;
  _area: number;
  
  constructor(address: string, color: string, owner: string, area: number) {
    this._address = address;
    this._color = color;
    this._owner = owner;
    this._area = area;
  };

  toSell(): void {
    console.log('For sale');
  };
};

class Flight {
  _origin: string;
  _destination: string;
  _departureDate: Date;
  _arrivalDate: Date;
  _passengers: number;

  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this._origin = origin;
    this._destination = destination;
    this._departureDate = departureDate;
    this._arrivalDate = arrivalDate;
    this._passengers = passengers;
  };
};

// Interfaces
interface Car {
  name: string;
  brand: string;
  color: string;
  yearModel: number;
  doors: number;
};

interface Cat {
  name: string;
  color: string;
  age: number;
  meow: () => void;
};

interface Airplane {
  model: string;
  brand: string;
  engines: number;
};