"use strict";
class Superclass {
    constructor(isSuper = true) {
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log('Olá Mundo!');
    }
}
class Subclass extends Superclass {
    constructor() {
        super();
        this.isSuper = false;
    }
}
const myFunc = (obj) => {
    obj.sayHello();
    if (obj.isSuper) {
        console.log('Super!');
    }
    else {
        console.log('Sub!');
    }
};
const obj1 = new Superclass(true);
const obj2 = new Subclass();
myFunc(obj1);
myFunc(obj2);
