"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const scripts = [
    { name: 'Convert length', script: './length' },
    { name: 'Convert mass', script: './mass' },
    { name: 'Convert capacity', script: './capacity' },
    { name: 'Convert area', script: './area' },
    { name: 'Convert volume', script: './volume' },
];
const scriptNames = scripts.map(item => item.name);
const choice = readline_sync_1.default.keyInSelect(scriptNames, 'Choose a number to execute the unit conversion script');
require(scripts[choice].script);
