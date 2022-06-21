"use strict";
class Customer {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 2) {
            throw new Error('The name must contain at least 2 characters');
        }
        this._name = value;
    }
}
class Item {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 2) {
            throw new Error('The name must contain at least 2 characters');
        }
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value < 0) {
            throw new Error('The price must be positive');
        }
        this._price = value;
    }
}
class Order {
    constructor(customer, items, payment, discount) {
        this._items = [];
        this._discount = 0;
        this._customer = customer;
        this._items = items;
        this._payment = payment;
        this._discount = discount;
    }
    get customer() {
        return this._customer;
    }
    set customer(value) {
        this._customer = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        if (value.length === 0) {
            throw new Error('The order must have um item at least');
        }
        this._items = value;
    }
    get payment() {
        return this._payment;
    }
    set payment(value) {
        this._payment = value;
    }
    get discount() {
        return this._discount;
    }
    set discount(value) {
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
