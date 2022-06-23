import Evaluation from "./Evaluation";

class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this._score = score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) {
      throw new Error('Score must be a positive number');
    }

    if (this.evaluation.type === 'exam' && value > 25) {
      throw new Error('Score must be less than 25 points')
    }

    if (this.evaluation.type === 'work' && value > 50) {
      throw new Error('Score must be less than 50 points');
    }

    this._score = value;
  }
}

export default EvaluationResult;