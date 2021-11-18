// 1.

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employeeData = (fullName) => {
  const email = `${fullName.replace(/' '/g, '_').toLowerCase()}@trybe.com`;
  return { name: fullName, email, };
}

console.log(newEmployees(employeeData));

// 2.

const draw = () => {
  const generateRandomNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  return generateRandomNum;
};

const checkNum = (num, callback) => {
  const condition = num === callback ? 'Parabéns, você ganhou!' : 'Tente novamente';
  console.log(num);
  console.log(callback);
    return condition;
};

console.log(checkNum(5, draw()));

// 3.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const countAnswers = (rightAnswers, studentAnswers, callback) => {
  let counter = 0;

  for (let i = 0; i < rightAnswers.length; i += 1) {
    const callbackRes = callback(rightAnswers[i], studentAnswers[i]);
    counter += callbackRes;
  }
  return `Resultado final: ${counter} pontos`
};

console.log(countAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, (rA, uA) => {
  if (rA === uA) { return 1 };
  if (uA === 'N.A') { return 0 };
  return -0.5;
}));

// Bônus
// 1.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Parte 1.

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) + warrior.strength);
const mageDamage = () => {
  if (mage.mana < 15) {
    mageDamage().dano = 'Não possui mana o suficiente';
    mageDamage().mana = mage.mana;
  }

  return {
    dano: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence),
    mana: mage.mana - 15,
  }
};

// Parte 2.

const gameActions = {
  warriorTurn: (dmg) => {
    dragon.healthPoints -= dmg;
    warrior.damage = dmg;
  },
  mageTurn: (dmg) => {
    dragon.healthPoints -= dmg.dano;
    mage.damage = dmg.dano;
    mage.mana = dmg.mana;
  },
  dragonTurn: (dmg) => {
    warrior.healthPoints -= dmg;
    mage.healthPoints -= dmg;
    dragon.damage = dmg;
  },
  rollTheDice: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage());
gameActions.mageTurn(mageDamage());
gameActions.dragonTurn(dragonDamage());
console.log(gameActions.rollTheDice());
