"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Evaluation {
    constructor(score, teacher, type) {
        this._score = score;
        this._teacher = teacher;
        this._type = type;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        if (value < 0) {
            throw new Error('Score must be a positive number');
        }
        if (this._type === 'exam' && value > 25) {
            throw new Error('Score must be less than 25 points');
        }
        if (this._type === 'work' && value > 50) {
            throw new Error('Score must be less than 50 points');
        }
        this._score = value;
    }
    get teacher() {
        return this._teacher;
    }
    set teacher(value) {
        this._teacher = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        if (value !== 'exam' && value !== 'work') {
            throw new Error('Evaluation type is invalid');
        }
        this._type = value;
    }
}
exports.default = Evaluation;
