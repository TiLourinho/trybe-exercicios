const readline = require('readline-sync');

const generateLotery = () => {
  const userNum = readline.questionInt('\nPick a number from 1 to 10. What is your number?\n');
  const randomNumber = Math.floor(Math.random() * 10 + 1);

  if (userNum === randomNumber) {
    console.log('Correct number! Congratulations!');
  } else {
    console.log(`\nOops, not this time. The prize number was ${randomNumber}`);
  }

  const askAgain = readline.question('\nTry again?\n(Type y to yes and any other key to no)\n');

  if (askAgain !== 'y') {
    return console.log('\nSee you later!\n');
  }

  generateLotery();
}
generateLotery();