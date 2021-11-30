const { describe, expect, it, beforeEach } = require('@jest/globals');
// const { beforeEach } = require('jest-circus');
const { createPresentationMessage, hackTheDb, restartDb } = require('./callbacks-start');

describe('A função createPresentationMessage', () => {
  beforeEach(() => restartDb());

  it('retorna erro quando falha', (done) => {
    const expectedError = new Error('Falha no acesso ao banco de dados!');
    hackTheDb();
    function callback(erro, resultado) {
      try {
        expect(erro).toEqual(expectedError);
        done();
      } catch (coisa) {
        done(coisa);
      }
    }
    createPresentationMessage((pessoa) => pessoa.name === 'João Corça', callback);
  });

  it('retorna corretamente a string para Xuxa', (done) => {
    const expectedString = 'Oi galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce.';
    function callback(erro, resultado) {
      try {
        expect(resultado).toBe(expectedString);
        console.log(erro);
        done();
      } catch (error) {
        done(error);
      }
    }
    createPresentationMessage((pessoa) => pessoa.name === 'Xuxa', callback);
  });

  it('retorna corretamente a string para João Corça', (done) => {
    const expectedString = 'Salve! Meu nome é João Corça e minha comida favorita é churrasco.';
    function callback(erro, resultado) {
      try {
        expect(resultado).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    }
    createPresentationMessage((pessoa) => pessoa.name === 'João Corça', callback);
  });
});