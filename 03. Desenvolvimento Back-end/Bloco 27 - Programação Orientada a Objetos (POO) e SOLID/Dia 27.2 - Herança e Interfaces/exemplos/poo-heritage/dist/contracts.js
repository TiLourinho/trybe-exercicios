"use strict";
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
}
class NaturalPerson extends Person {
    constructor(name, cpf) {
        super(name);
        this._cpf = cpf;
    }
    get cpf() { return this._cpf; }
}
class LegalPerson extends Person {
    constructor(name, cnpj) {
        super(name);
        this._cnpj = cnpj;
    }
}
class SalesContract {
    constructor() {
        this._signatories = [];
        this._clauses = [];
    }
    get signatories() { return [...this._signatories]; }
    get clauses() { return [...this._clauses]; }
    get subject() { return "Sales"; }
    sign(signatory) { this._signatories.push(signatory); }
    addClause(clause) {
        if (this._signatories.length > 0)
            return;
        this._clauses.push(clause);
    }
    describe() {
        console.log('--------------------');
        console.log(`Contrato: ${this.subject}`);
        this.clauses.forEach((clause) => { console.log(`Cláusula: ${clause}`); });
        this.signatories.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`); });
        console.log('--------------------\n');
    }
}
const s1 = new SalesContract();
const pp1 = new NaturalPerson('Tony', '123456789');
const pp2 = new NaturalPerson('Lilly', '987654321');
const lp = new LegalPerson('International Sales SA', '23961237162378');
s1.describe();
s1.addClause('Foo');
s1.addClause('Bar');
s1.describe();
s1.sign(pp1);
s1.sign(pp2);
s1.describe();
s1.addClause('Baz');
s1.sign(lp);
s1.describe();
