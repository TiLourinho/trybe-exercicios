const connection = require('./connection');

const getPong = () => {
  const pong = { message: 'pong!' };

  return pong;
};

const formatCep = (cep) => {
  const regex = /\d{5}-\d{3}/;
  const checkRegex = regex.test(cep);

  if (checkRegex) return cep;

  const newCEP = cep.replace(/(\d{5})(\d{3})/, '$1-$2');

  return newCEP;
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf });

const getByCEP = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', '');

  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const data = await connection.execute(query, [treatedCep])
  const result = data.length ? data[0] : null;

  if (!result) return null;

  return getNewCep(result);
};

const registerCEP = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = rawCep.replace(/-/ig, '');

  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
  getPong,
  getByCEP,
  registerCEP
};