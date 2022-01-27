const service = require('./service');
jest.mock('./service');

it('Verifique se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

it('Verifique se a função foi chamada, qual seu retorno, quantas vezes foi chamada e a nova implementação de divisão foi aplicada. A aplicação da nova implementação deve acontecer apenas uma vez.', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
  expect(service.randomNumber(10, 5)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(10, 5);
});

describe('Testando implementações', () => {
  it('Verifique se a função mockada recebe 3 parâmetros e qual seu retorno.', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 3, 4)).toBe(24);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  it('Verifique se a função mockada recebeu uma nova implementação, que tenha apenas um parâmetro e retorne o dobro.', () => {
    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementation(a => a * a);

    expect(service.randomNumber(5)).toBe(25);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });
});

describe('Testando mais implementações', () => {
  it('Verifique se a função mockada recebe 1 parâmetro e tem seu retorno em caixa baixa.', () => {
    service.strToUpperCase = jest.fn().mockImplementation(str => str.toLowerCase());

    expect(service.strToUpperCase('TESTE')).toBe('teste');
    expect(service.strToUpperCase).toHaveBeenCalled();
    expect(service.strToUpperCase).toHaveBeenCalledTimes(1);
    expect(service.strToUpperCase).toHaveBeenCalledWith('TESTE');

    service.strToUpperCase.mockRestore();

    expect(service.strToUpperCase('teste')).toBe('TESTE');
  });

  it('Verifique se a função mockada retorna a última letra de uma string.', () => {
    service.firstLetterOf = jest.fn().mockImplementation(str => str.charAt(str.length - 1));

    expect(service.firstLetterOf('Mock')).toBe('k');
    expect(service.firstLetterOf).toHaveBeenCalled();
    expect(service.firstLetterOf).toHaveBeenCalledTimes(1);
    expect(service.firstLetterOf).toHaveBeenCalledWith('Mock');
  });

  it('Verifique se a função mockada recebe 3 parâmetros e retorna a concatenação desses.', () => {
    service.concatStrs = jest.fn().mockImplementation((strA, strB, strC) => strA.concat(' ', strB, ' ', strC));

    expect(service.concatStrs('Hello', 'World', 'Again!')).toBe('Hello World Again!');
    expect(service.concatStrs).toHaveBeenCalled();
    expect(service.concatStrs).toHaveBeenCalledTimes(1);
    expect(service.concatStrs).toHaveBeenCalledWith('Hello', 'World', 'Again!');
  })
})
