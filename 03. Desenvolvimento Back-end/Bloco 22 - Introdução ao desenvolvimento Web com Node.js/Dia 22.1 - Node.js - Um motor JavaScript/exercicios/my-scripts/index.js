const readline = require('readline-sync');

const scripts = [
  { name: 'IMC Calculator', script: './imc.js' },
  { name: 'Speed/Distance Calculator', script: './speed.js' },
  { name: 'Lotery Game', script: './lotery.js' }
];

const message = scripts.map((script, index) => `${index + 1} - ${script.name}`);
message.unshift('Pick a number to execute the corresponding script');

const finalMessage = message.join('\n') + '\n';

const scriptNumber = readline.questionInt(finalMessage) - 1;

const script = scripts[scriptNumber];

const checkScript = () => {
  if (!script) {
    return console.log('Invalid number');
  }
}
checkScript();

require(script.script);