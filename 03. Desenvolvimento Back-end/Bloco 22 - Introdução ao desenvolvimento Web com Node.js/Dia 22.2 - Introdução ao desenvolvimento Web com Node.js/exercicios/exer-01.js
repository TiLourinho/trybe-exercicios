const calc = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error('Informe apenas números'));

    const result = (a + b) * c;
    
    if (result < 50) reject(new Error('Valor muito baixo'));
      resolve(result);
  });
}

const randomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
}

const callCalc = async () => {
  const a = randomNumber();
  const b = randomNumber();
  const c = randomNumber();

  // calc(a, b, c)
  //   .then(result => console.log(`Sucesso! O resultado final é ${result}`))
  //   .catch(err => console.log(`Erro! ${err.message}`));
  
  try {
    const result = await calc(a, b, c);
    console.log(`Sucesso! O resultado final é ${result}`);
  } catch (err) {
    console.log(`Erro! ${err.message}`);
  }
}
callCalc();
