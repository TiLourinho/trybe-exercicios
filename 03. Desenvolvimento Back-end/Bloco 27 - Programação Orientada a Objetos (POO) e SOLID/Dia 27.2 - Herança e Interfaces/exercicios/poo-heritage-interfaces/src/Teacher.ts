import Person from './Person';
import Employee from './interfaces/Employee.interface';
import Subject from './Subject';

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._subject = subject;
    this._registration = this.generateRegistration();
    this._salary = salary;
    this._admissionDate = new Date();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) {
      throw new Error('Registration must contain at least 16 characters');
    }

    this._registration = value;
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

  generateRegistration(): string {
    const uniqueStr = Date.now().toString(36) + Math.random().toString(36).substring(8);

    return `ADM${uniqueStr}`;
  }
}

const math = new Subject('Math');
const history = new Subject('History');
const philosophy = new Subject('Philosophy');

const teacher1 = new Teacher('Margareth', new Date('1981/03/10'), 9500, math);
const teacher2 = new Teacher('Joseph', new Date('1978/08/15'), 9000, history);
const teacher3 = new Teacher('Daisy', new Date('1984/07/19'), 8000, philosophy);

teacher1.admissionDate = new Date('2020/02/10');

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

export default Teacher;