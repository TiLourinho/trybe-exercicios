class Customer {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 2) {
      throw new Error('The name must contain at least 2 characters');
    }
    this._name = value;
  }
}

class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 2) {
      throw new Error('The name must contain at least 2 characters');
    }
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error('The price must be positive');
    }
    this._price = value;
  }
}

class Order {
  private _customer: Customer;
  private _items: Item[] = [];
  private _payment: string;
  private _discount: number = 0;

  constructor(customer: Customer, items: Item[], payment: string, discount: number) {
    this._customer = customer;
    this._items = items;
    this._payment = payment;
    this._discount = discount;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get items(): Item[] {
    return this._items;
  }

  set items(value: Item[]) {
    if (value.length === 0) {
      throw new Error('The order must have um item at least');
    }
    this._items = value;
  }

  get payment(): string {
    return this._payment;
  }

  set payment(value: string) {
    this._payment = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }
}

const customer = new Customer('Tiago');

const hamburguer = new Item('Cheeseburguer', 30);
const fries = new Item('French Fries', 10);
const coke = new Item('Coca-Cola', 5);
const brownie = new Item('Brownie', 8);

const order = new Order(customer, [hamburguer, fries, coke, brownie], 'cash', 0.15);

console.log(order);