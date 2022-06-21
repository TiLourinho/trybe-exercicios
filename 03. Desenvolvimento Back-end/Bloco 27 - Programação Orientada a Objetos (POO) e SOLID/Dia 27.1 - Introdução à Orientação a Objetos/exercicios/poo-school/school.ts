class Student {
  private _enrollment: string;
  private _name: string;
  private _exams: number[];
  private _works: number[];

  constructor(enrollment: string, name: string, exams: number[], works: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this._exams = exams;
    this._works = works;
  }

  sum(): number {
    const allGrades = [...this._exams, ...this._works];
    return allGrades.reduce((acc, curr) => acc + curr, 0);
  }

  average(): number {
    const allGrades = [...this._exams, ...this._works];
    return allGrades.reduce((acc, curr) => (acc + curr), 0) / allGrades.length;
  }

  presentation(): void {
    console.log(`Student ${this._name}, with enrollment ${this._enrollment},
      has as ${this.sum()} the sum of exams and works grades and an average of ${this.average()}`);
  }
}

const student1 = new Student('202201A01', 'Tiago Lourinho', [9, 9, 10, 10], [10, 10]);
student1.presentation();

const student2 = new Student('202201A02', 'Cristiane Leite', [10, 10, 9, 9], [10, 10]);
student2.presentation();

export default Student;