import Employee from './Employee';
import Subject from './Subject';

class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary);

    this._subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  generateRegistration(): string {
    const uniqueStr = Date.now().toString(36) + Math.random().toString(36).substring(8);

    return `TEA${uniqueStr}`;
  }
}

export default Teacher;