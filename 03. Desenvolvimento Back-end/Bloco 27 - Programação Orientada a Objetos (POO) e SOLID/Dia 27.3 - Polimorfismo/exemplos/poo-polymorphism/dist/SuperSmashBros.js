"use strict";
class Character {
    constructor() { }
}
class MeleeCharacter extends Character {
    constructor(name, specialMoveName) {
        super();
        this._name = name;
        this._specialMoveName = specialMoveName;
    }
    talk() {
        console.log(`${this._name} is talking`);
    }
    specialMove() {
        console.log(`${this._specialMoveName}`);
    }
}
class LongRangeCharacter extends Character {
    constructor(name, specialMoveName) {
        super();
        this._name = name;
        this._specialMoveName = specialMoveName;
    }
    talk() {
        console.log(`${this._name} is talking`);
    }
    specialMove() {
        console.log(`${this._specialMoveName}`);
    }
}
const presentation = (character) => {
    character.talk();
    character.specialMove();
};
const dhrar = new MeleeCharacter('Dhrar', 'Execute');
const tharrira = new LongRangeCharacter('Tharrira', 'Mind Flail');
presentation(dhrar);
presentation(tharrira);
