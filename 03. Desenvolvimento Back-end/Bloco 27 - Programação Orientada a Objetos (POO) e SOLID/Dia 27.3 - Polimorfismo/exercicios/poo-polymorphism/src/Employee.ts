import Person from '../src/Person';
import Enrollable from './interfaces/Enrollable';

class Employee extends Person implements Enrollable {
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);

    this._enrollment = this.generateEnrollment();
    this._salary = salary;
    this._admissionDate = new Date();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('Enrollment must contain at least 16 characters');
    }

    this._enrollment = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error('Salary must be a positive number');
    }

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('Admission Date can\'t be a future date');
    }

    this._admissionDate = value;
  }

  generateEnrollment(): string {
    const uniqueStr = Date.now().toString(36) + Math.random().toString(36).substring(8);

    return `EMP${uniqueStr}`;
  }
}

export default Employee;