const cepModel = require('../models/cepModel');

const getPong = () => {
  const pong = cepModel.getPong();

  return pong;
};

const getByCEP = async (cep) => {
  const regex = /\d{5}-?\d{3}/;
  const checkRegex = regex.test(cep);

  if (!checkRegex) {
    return { error: { code: 'invalidData', message: "CEP inválido" } };
  }

  const data = await cepModel.getByCEP(cep);

  if (!data) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }

  return data;
}

const registerCEP = async (cep, logradouro, bairro, localidade, uf) => {
  const checkingCEP = await cepModel.getByCEP(cep);

  if (checkingCEP) {
    return { error: { code: 'alreadyExists', message: 'CEP já existente' } };
  }

  const registerCEP = await cepModel.registerCEP(cep, logradouro, bairro, localidade, uf);

  return registerCEP;
};

module.exports = {
  getPong,
  getByCEP,
  registerCEP
};
