"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(name) {
        this._name = name;
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
}
exports.default = Subject;
