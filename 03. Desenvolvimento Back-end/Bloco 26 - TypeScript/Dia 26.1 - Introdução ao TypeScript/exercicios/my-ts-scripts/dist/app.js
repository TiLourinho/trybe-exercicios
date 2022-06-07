"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const months_1 = __importDefault(require("./months"));
const seasons_1 = __importDefault(require("./seasons"));
const monthsNames = Object.values(months_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, 'Pick a month');
const seasonsNorth = {
    [seasons_1.default.AUTUMN]: [months_1.default.SEPTEMBER, months_1.default.OCTOBER, months_1.default.NOVEMBER, months_1.default.DECEMBER],
    [seasons_1.default.WINTER]: [months_1.default.DECEMBER, months_1.default.JANUARY, months_1.default.FEBRUARY, months_1.default.MARCH],
    [seasons_1.default.SPRING]: [months_1.default.JANUARY, months_1.default.FEBRUARY, months_1.default.MARCH, months_1.default.APRIL],
    [seasons_1.default.SUMMER]: [months_1.default.APRIL, months_1.default.MAY, months_1.default.JUNE, months_1.default.JULY],
};
const seasonsSouth = {
    [seasons_1.default.AUTUMN]: [months_1.default.MARCH, months_1.default.APRIL, months_1.default.MAY, months_1.default.JUNE],
    [seasons_1.default.WINTER]: [months_1.default.JUNE, months_1.default.JULY, months_1.default.AUGUST, months_1.default.SEPTEMBER],
    [seasons_1.default.SPRING]: [months_1.default.SEPTEMBER, months_1.default.OCTOBER, months_1.default.NOVEMBER, months_1.default.DECEMBER],
    [seasons_1.default.SUMMER]: [months_1.default.DECEMBER, months_1.default.JANUARY, months_1.default.FEBRUARY, months_1.default.MARCH],
};
const hemispheres = {
    'North': seasonsNorth,
    'South': seasonsSouth,
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), 'Pick a hemisphere');
const month = Object.values(months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Month: \n${month}\n`);
console.log(`Hemishere: \n${hemisphere}\n`);
console.log(`Seasons:`);
const chosenHemishereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemishereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(`${seasons}`);
});
