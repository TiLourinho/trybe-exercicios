// 1.

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);
console.log(getRepos('https://api.github.com/orgs/tryber/repos'))

// O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado.
// Dada a URL 'https://api.github.com/orgs/tryber/repos', faça um teste que verifique que os repositórios
// 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

it('Verifica se os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator', async () => {
  const trybe = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(trybe).toContain('sd-01-week4-5-project-todo-list');
  expect(trybe).toContain('sd-01-week4-5-project-meme-generator');
});

// 2.

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
