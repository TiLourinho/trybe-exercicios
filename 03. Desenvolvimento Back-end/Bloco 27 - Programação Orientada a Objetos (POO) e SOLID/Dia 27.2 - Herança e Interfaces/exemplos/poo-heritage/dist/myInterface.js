"use strict";
class myClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return `${this.myNumber + myParam}`;
    }
}
const obj = new myClass(5);
console.log(obj.myNumber);
console.log(obj.myFunc(10));
