const readline = require('readline-sync');

const calcIMC = () => {
  const weight = readline.questionFloat('\nWhat is your weight?\n');
  const heigth = readline.question('\nWhat is your heigth?\n');
    
  const IMC = Math.round(weight / (heigth * heigth));

  console.log(`\nYour IMC is: ${IMC}\n`)

  if (IMC <= 18.5) {
    console.log('Situation of underweight\n');
  } else if (IMC > 18.5 && IMC <= 25) {
    console.log('Optimal weight situation\n');
  } else if (IMC > 25 && IMC <= 30) {
    console.log('Overweight situation\n');
  } else if (IMC > 30 && IMC <= 40) {
    console.log('Obesity situation\n');
  } else {
    console.log('Situation of severe obesity\n');
  }

  return IMC;
}
calcIMC();