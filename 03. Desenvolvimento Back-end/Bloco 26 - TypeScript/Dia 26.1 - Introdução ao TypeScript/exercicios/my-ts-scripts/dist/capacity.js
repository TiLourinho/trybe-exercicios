"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const convert = (value, baseUnit, convertUnit) => {
    const base = units.indexOf(baseUnit);
    const toConvert = units.indexOf(convertUnit);
    const result = (toConvert - base);
    return value * Math.pow(10, result);
};
const exec = () => {
    const value = readline_sync_1.default.questionFloat('Enter the amount to be converted: \n');
    const baseUnitChoiceIndex = readline_sync_1.default.keyInSelect(units, 'Choose a number for the base unit:');
    const convertUnitChoiceIndex = readline_sync_1.default.keyInSelect(units, 'Choose a number for conversion:');
    const baseUnitChoice = units[baseUnitChoiceIndex];
    const convertUnitChoice = units[convertUnitChoiceIndex];
    const result = convert(value, baseUnitChoice, convertUnitChoice);
    const message = `${value}${baseUnitChoice} equals to ${result}${convertUnitChoice}`;
    console.log(message);
};
exec();
