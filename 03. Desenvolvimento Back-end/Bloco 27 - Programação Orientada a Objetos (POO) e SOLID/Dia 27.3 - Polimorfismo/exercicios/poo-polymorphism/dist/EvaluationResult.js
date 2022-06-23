"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EvaluationResult {
    constructor(evaluation, score) {
        this._evaluation = evaluation;
        this._score = score;
    }
    get evaluation() {
        return this._evaluation;
    }
    set evaluation(value) {
        this._evaluation = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        if (value < 0) {
            throw new Error('Score must be a positive number');
        }
        if (this.evaluation.type === 'exam' && value > 25) {
            throw new Error('Score must be less than 25 points');
        }
        if (this.evaluation.type === 'work' && value > 50) {
            throw new Error('Score must be less than 50 points');
        }
        this._score = value;
    }
}
exports.default = EvaluationResult;
