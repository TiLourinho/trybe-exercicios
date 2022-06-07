"use strict";
const sum = (st) => {
    return st.x + st.y;
};
// Classes
class Dog {
    constructor(name, color, race, age) {
        this._name = name;
        this._color = color;
        this._race = race;
        this._age = age;
    }
    ;
    toBark() {
        console.log('Woof woof');
    }
    ;
}
;
class House {
    constructor(address, color, owner, area) {
        this._address = address;
        this._color = color;
        this._owner = owner;
        this._area = area;
    }
    ;
    toSell() {
        console.log('For sale');
    }
    ;
}
;
class Flight {
    constructor(origin, destination, departureDate, arrivalDate, passengers) {
        this._origin = origin;
        this._destination = destination;
        this._departureDate = departureDate;
        this._arrivalDate = arrivalDate;
        this._passengers = passengers;
    }
    ;
}
;
;
;
;
