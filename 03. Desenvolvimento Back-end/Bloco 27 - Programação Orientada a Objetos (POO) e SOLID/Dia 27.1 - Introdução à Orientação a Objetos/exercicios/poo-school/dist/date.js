"use strict";
class Data {
    constructor(day, month, year) {
        const dateStr = `${year}-${month}-${day}`;
        if (new Date(dateStr).getDate() !== day) {
            this._day = 1;
            this._month = 1;
            this._year = 1900;
        }
        else {
            this._day = day;
            this._month = month;
            this._year = year;
        }
    }
    get day() {
        return this._day;
    }
    set day(value) {
        if (value > 31 || value < 1) {
            throw new Error('The number must be between 1 and 31');
        }
        this._day = value;
    }
    get month() {
        return this._month;
    }
    set month(value) {
        if (value > 12 || value < 1) {
            throw new Error('The number must be between 1 and 12');
        }
        this._month = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        if (value > 2022 || value < 1) {
            throw new Error('The number must be between 1 and 2022');
        }
        this._year = value;
    }
    getMonthName() {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        return months[this.month - 1];
    }
    isLeapYear() {
        return this._year % 4 === 0;
    }
    compare(date) {
        const currentDateStr = `${this.year}-${this.month}-${this.day}`;
        const dateStr = `${date.year}-${date.month}-${date.day}`;
        if (new Date(currentDateStr) > new Date(dateStr))
            return 1;
        if (new Date(currentDateStr) < new Date(dateStr))
            return -1;
        return 0;
    }
    format(formatting) {
        const conditions = [
            (!formatting.match(/a{2,4}/g)),
            (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)),
            (!formatting.match(/d{2}/g)),
        ];
        if (conditions.every((cond) => cond)) {
            throw new Error(`O formato passado é inválido: ${formatting}`);
        }
        const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
        const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
        const year = this.year.toString();
        const dateFormatting = formatting
            .replace('dd', day)
            .replace('mm', month)
            .replace('M', this.getMonthName())
            .replace('aaaa', year)
            .replace('aa', year.substr(-2));
        return dateFormatting;
    }
}
const testDate = new Data(29, 1, 1989);
console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));
const otherDate = new Data(30, 1, 2021);
const compared = testDate.compare(otherDate);
const compareStates = ['anterior', 'igual', 'posterior'];
console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);
// data inválida
const invalidDate = new Data(31, 2, 2021);
console.log('Teste data inválida: ', invalidDate);
// formato inválido
console.log(invalidDate.format('a m d'));
