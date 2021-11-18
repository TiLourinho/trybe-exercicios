const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleepNow = () => 'Partiu dormir';

const doingThings = (func) => {
  const result = func();
  console.log(result);
};

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleepNow);
