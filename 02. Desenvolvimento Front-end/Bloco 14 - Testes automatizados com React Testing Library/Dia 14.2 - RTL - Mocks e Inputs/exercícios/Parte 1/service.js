const randomNumber = () => {
  const result = Math.floor(Math.random() * 101);

  return result;
}

const strToUpperCase = (str) => {
  const result = str.toUpperCase();

  return result;
}

const firstLetterOf = (str) => {
  const result = str.charAt(0);

  return result;
}

const concatStrs = (strA, strB) => {
  const result = strA.concat(' ', strB);

  return result;
}

module.exports = { randomNumber };
