const express = require('express');
const fs = require('fs').promises;
const teamsRouter = express.Router();
const validateName = require('../middlewares/validateName');
const validateInitials = require('../middlewares/validateInitials');
const validateCountry = require('../middlewares/validateCountry');
const { OK } = require('../helpers/statusCode');
const filePath = './teams.json';

teamsRouter.post('/', validateName, validateInitials, validateCountry, async (req, res) => {
  const { name, initials, country, league } = req.body;
  const toWrite = { team: name, initials: initials.toUpperCase(), country: country, league: league };

  const data = await fs.readFile(filePath, 'utf-8');

  if (!data) {
    await fs.writeFile(filePath, JSON.stringify([toWrite]));
  }

  const result = JSON.parse(data);
  result.push(toWrite);
  
  await fs.writeFile(filePath, JSON.stringify(result));

  return res.status(OK).json({ team: name, initials: initials.toUpperCase(), country, league });
});

teamsRouter.get('/', async (_req, res) => {
  const data = await fs.readFile('./teams.json', 'utf-8');
  const result = JSON.parse(data);

  if (!result) {
    return res.status(OK).json({ teams: [] });
  }
  return res.status(OK).json({ result });
});

module.exports = teamsRouter;
