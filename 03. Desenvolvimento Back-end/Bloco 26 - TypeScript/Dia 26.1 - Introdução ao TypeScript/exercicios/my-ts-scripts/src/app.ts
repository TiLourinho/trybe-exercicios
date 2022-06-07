import readline from 'readline-sync';
import Months from './months';
import Seasons from './seasons';

const monthsNames = Object.values(Months);

const choiceMonth = readline.keyInSelect(monthsNames, 'Pick a month');

const seasonsNorth = {
  [Seasons.AUTUMN]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
  [Seasons.WINTER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
  [Seasons.SPRING]: [Months.JANUARY, Months.FEBRUARY, Months.MARCH, Months.APRIL],
  [Seasons.SUMMER]: [Months.APRIL, Months.MAY, Months.JUNE, Months.JULY],
};

const seasonsSouth = {
  [Seasons.AUTUMN]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
  [Seasons.WINTER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
  [Seasons.SPRING]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
  [Seasons.SUMMER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
};

const hemispheres = {
  'North': seasonsNorth,
  'South': seasonsSouth,
};

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), 'Pick a hemisphere');

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Month: \n${month}\n`);
console.log(`Hemishere: \n${hemisphere}\n`);
console.log(`Seasons:`);

const chosenHemishereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemishereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];

  if (months.includes(month)) console.log(`${seasons}`);
});