"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
        this._exams = [];
        this._works = [];
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        if (value.length < 16) {
            throw new Error('Enrollment must contain at least 16 characters');
        }
        this._enrollment = value;
    }
    get exams() {
        return this._exams;
    }
    set exams(value) {
        if (value.length > 4) {
            throw new Error('Exams can be a maximum of 4 grades');
        }
        this._exams = value;
    }
    get works() {
        return this._works;
    }
    set works(value) {
        if (value.length > 2) {
            throw new Error('Works can be a maximum of 2 grades');
        }
        this._works = value;
    }
    sumGrades() {
        const allGrades = [...this._exams, ...this._works];
        const sum = Number(allGrades.reduce((acc, curr) => acc + curr, 0).toFixed(2));
        return sum;
    }
    averageGrades() {
        const average = Number((this.sumGrades() / this._exams.length + this._works.length).toFixed(2));
        return average;
    }
    generateEnrollment() {
        const uniqueStr = Date.now().toString(36) + Math.random().toString(36).substring(8);
        return `STU${uniqueStr}`;
    }
    presentation() {
        console.log(`Student ${this.name}, with enrollment ${this._enrollment},
      has as ${this.sumGrades()} the sum of exams and works grades and an average of ${this.averageGrades()}`);
    }
}
exports.default = Student;
