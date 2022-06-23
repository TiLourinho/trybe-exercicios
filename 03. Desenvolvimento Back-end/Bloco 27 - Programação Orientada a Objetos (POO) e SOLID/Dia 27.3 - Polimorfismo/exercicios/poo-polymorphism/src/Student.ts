import Person from './Person';
import Enrollable from './interfaces/Enrollable';

class Student extends Person implements Enrollable {
  private _enrollment: string;
  private _exams: number[];
  private _works: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    
    this._enrollment = this.generateEnrollment();
    this._exams = [];
    this._works = [];
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

  get exams(): number[] {
    return this._exams;
  }

  set exams(value: number[]) {
    if (value.length > 4) {
      throw new Error('Exams can be a maximum of 4 grades');
    }

    this._exams = value;
  }

  get works(): number[] {
    return this._works;
  }

  set works(value: number[]) {
    if (value.length > 2) {
      throw new Error('Works can be a maximum of 2 grades');
    }

    this._works = value;
  }
  
  sumGrades(): number {
    const allGrades = [...this._exams, ...this._works];
    const sum = Number(allGrades.reduce((acc, curr) => acc + curr, 0).toFixed(2));

    return sum;
  }

  averageGrades(): number {
    const average = Number((this.sumGrades() / this._exams.length + this._works.length).toFixed(2));

    return average;
  }

  generateEnrollment(): string {
    const uniqueStr = Date.now().toString(36) + Math.random().toString(36).substring(8);

    return `STU${uniqueStr}`;
  }

  presentation(): void {
    console.log(`Student ${this.name}, with enrollment ${this._enrollment},
      has as ${this.sumGrades()} the sum of exams and works grades and an average of ${this.averageGrades()}`);
  }
}

export default Student;