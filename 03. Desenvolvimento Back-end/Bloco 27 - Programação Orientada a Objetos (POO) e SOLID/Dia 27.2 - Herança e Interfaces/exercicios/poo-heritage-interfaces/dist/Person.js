"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('Name must contain at least 3 characters');
        }
        this._name = value;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        const age = new Date().getFullYear() - value.getFullYear();
        if (value.getTime() > new Date().getTime()) {
            throw new Error('Birthdate can\'t be a future date');
        }
        if (age > 120) {
            throw new Error('Person can be a maximum of 120 years old');
        }
        this._birthDate = value;
    }
}
const person1 = new Person('Tiago', new Date('1983/07/28'));
const person2 = new Person('Cris', new Date('1984/04/27'));
exports.default = Person;
