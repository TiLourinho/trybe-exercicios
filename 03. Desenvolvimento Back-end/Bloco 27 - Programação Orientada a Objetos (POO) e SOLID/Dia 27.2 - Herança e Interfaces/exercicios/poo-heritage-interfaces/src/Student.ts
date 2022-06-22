import Person from './Person';

class Student extends Person {
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
    const allGrades = [...this._exams, ...this._works];
    const average = Number((allGrades.reduce((acc, curr) => (acc + curr), 0) / allGrades.length).toFixed(2));

    return average;
  }

  generateEnrollment(): string {
    const uniqueStr = Date.now().toString(36) + Math.random().toString(36).substring(5);

    return uniqueStr;
  }

  presentation(): void {
    console.log(`Student ${this.name}, with enrollment ${this._enrollment},
      has as ${this.sumGrades()} the sum of exams and works grades and an average of ${this.averageGrades()}`);
  }
}

const student1 = new Student('Roberto', new Date('2001/02/25'));
student1.exams = [6.5, 7, 6, 8];
student1.works = [8.5, 7];
student1.presentation();

const student2 = new Student('Marina', new Date('2003/05/04'));
student2.exams = [8, 9.5, 7.5, 8];
student2.works = [9, 9];
student2.presentation();

const student3 = new Student('Yussif', new Date('2000/11/21'));
student3.exams = [5.5, 4.5, 6, 6.5];
student3.works = [6, 7.5];
student3.presentation();

const student4 = new Student('Lis', new Date('2004/09/01'));
student4.exams = [9.5, 10, 10, 9.5];
student4.works = [10, 10];
student4.presentation();

const student5 = new Student('Arthur', new Date('2002/10/17'));
student5.exams = [8.5, 9, 7.5, 9];
student5.works = [9, 9.5];
student5.presentation();

export default Student;