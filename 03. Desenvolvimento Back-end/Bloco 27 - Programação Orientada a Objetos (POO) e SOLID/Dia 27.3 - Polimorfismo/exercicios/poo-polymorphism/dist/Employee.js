"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("../src/Person"));
class Employee extends Person_1.default {
    constructor(name, birthDate, salary) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
        this._salary = salary;
        this._admissionDate = new Date();
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
    generateEnrollment() {
        const uniqueStr = Date.now().toString(36) + Math.random().toString(36).substring(8);
        return `EMP${uniqueStr}`;
    }
}
exports.default = Employee;
