import Teacher from './Teacher';

class Evaluation {
  private _score: number;
  private _teacher: Teacher;
  private _type: string;

  constructor(score: number, teacher: Teacher, type: string) {
    this._score = score;
    this._teacher = teacher;
    this._type = type;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) {
      throw new Error('Score must be a positive number');
    }

    if (this._type === 'exam' && value > 25) {
      throw new Error('Score must be less than 25 points')
    }

    if (this._type === 'work' && value > 50) {
      throw new Error('Score must be less than 50 points');
    }

    this._score = value;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    if (value !== 'exam' && value !== 'work') {
      throw new Error('Evaluation type is invalid');
    }

    this._type = value;
  }
}

export default Evaluation;