abstract class Character {
  constructor() { }

  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  private _name: string;
  private _specialMoveName: string;

  constructor(name: string, specialMoveName: string) {
    super();
    this._name = name;
    this._specialMoveName = specialMoveName;
  }

  talk(): void {
    console.log(`${this._name} is talking`);
  }

  specialMove(): void {
    console.log(`${this._specialMoveName}`);
  }
}

class LongRangeCharacter extends Character {
  private _name: string;
  private _specialMoveName: string;

  constructor(name: string, specialMoveName: string) {
    super();
    this._name = name;
    this._specialMoveName = specialMoveName;
  }

  talk(): void {
    console.log(`${this._name} is talking`);
  }

  specialMove(): void {
    console.log(`${this._specialMoveName}`);
  }
}

const presentation = (character: Character) => {
  character.talk();
  character.specialMove();
}

const dhrar = new MeleeCharacter('Dhrar', 'Execute');
const tharrira = new LongRangeCharacter('Tharrira', 'Mind Flail');

presentation(dhrar);
presentation(tharrira);