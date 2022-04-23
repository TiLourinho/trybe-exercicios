const POSTS = [
  { id: 1, quote: 'This is the part where Cameron goes berserk.', author: 'Ferris Bueller' },
  { id: 2, quote: `Ferris Bueller, you're my hero!`, author: 'Cameron Frye' },
  { id: 3, quote: `Between grief and nothing... I'll take grief.`, author: 'Ed Rooney' },
  { id: 4, quote: `Pardon my french, but you're an asshole!`, author: 'Cameron Frye' },
  { id: 5, quote: 'Sooner or later, everybody goes kazoo.', author: 'Sloane Peterson' }
];

const FILE_PATH = './teams.json';


module.exports = {
  PORT: 3000,
  API: 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
  POSTS,
  FILE_PATH,
}