"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const Subject_1 = __importDefault(require("./Subject"));
class Teacher extends Person_1.default {
    constructor(name, birthDate, salary, subject) {
        super(name, birthDate);
        this._subject = subject;
        this._registration = this.generateRegistration();
        this._salary = salary;
        this._admissionDate = new Date();
    }
    get subject() {
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    get registration() {
        return this._registration;
    }
    set registration(value) {
        if (value.length < 16) {
            throw new Error('Registration must contain at least 16 characters');
        }
        this._registration = value;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 0) {
            throw new Error('Salary must be a positive number');
        }
        this._salary = value;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    set admissionDate(value) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('Admission Date can\'t be a future date');
        }
        this._admissionDate = value;
    }
    generateRegistration() {
        const uniqueStr = Date.now().toString(36) + Math.random().toString(36).substring(8);
        return `ADM${uniqueStr}`;
    }
}
const math = new Subject_1.default('Math');
const history = new Subject_1.default('History');
const philosophy = new Subject_1.default('Philosophy');
const teacher1 = new Teacher('Margareth', new Date('1981/03/10'), 9500, math);
const teacher2 = new Teacher('Joseph', new Date('1978/08/15'), 9000, history);
const teacher3 = new Teacher('Daisy', new Date('1984/07/19'), 8000, philosophy);
teacher1.admissionDate = new Date('2020/02/10');
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
exports.default = Teacher;
