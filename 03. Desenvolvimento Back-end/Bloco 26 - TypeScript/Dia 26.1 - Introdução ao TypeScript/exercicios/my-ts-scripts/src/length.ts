import readline from 'readline-sync';

const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convert = (value: number, baseUnit: string, convertUnit: string): number => {
  const base = units.indexOf(baseUnit);
  const toConvert = units.indexOf(convertUnit);
  const result = (toConvert - base);

  return value * Math.pow(10, result);
};

const exec = () => {
  const value = readline.questionFloat('Enter the amount to be converted: \n');
  const baseUnitChoiceIndex = readline.keyInSelect(units, 'Choose a number for the base unit:');
  const convertUnitChoiceIndex = readline.keyInSelect(units, 'Choose a number for conversion:');

  const baseUnitChoice = units[baseUnitChoiceIndex];
  const convertUnitChoice = units[convertUnitChoiceIndex];

  const result = convert(value, baseUnitChoice, convertUnitChoice);

  const message = `${value}${baseUnitChoice} equals to ${result}${convertUnitChoice}`;
  console.log(message);
};

exec();