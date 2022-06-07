import readline from 'readline-sync';

const scripts = [
  { name: 'Convert length', script: './length' },
  { name: 'Convert mass', script: './mass' },
  { name: 'Convert capacity', script: './capacity' },
  { name: 'Convert area', script: './area' },
  { name: 'Convert volume', script: './volume' },
];

const scriptNames = scripts.map(item => item.name);

const choice = readline.keyInSelect(scriptNames, 'Choose a number to execute the unit conversion script');

require(scripts[choice].script);