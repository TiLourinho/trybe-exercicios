const readline = require('readline-sync');

const calcAvgSpeed = () => {
  const distance = readline.questionInt('\nWhat is the distance (m)?\n');
  const speed = readline.questionInt('\nWhat is the speed (s)?\n');

  const avgSpeed = (distance / speed).toFixed(2);

  console.log(`\nThe average speed is ${avgSpeed} m/s\n`)
  return avgSpeed;
}
calcAvgSpeed();