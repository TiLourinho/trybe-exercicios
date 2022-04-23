const express = require('express');
const fs = require('fs').promises;
const teamsRouter = express.Router();
const validateName = require('../middlewares/validateName');
const validateInitials = require('../middlewares/validateInitials');
const validateCountry = require('../middlewares/validateCountry');
const { readContentFile, writeContentFile } = require('../helpers/fsFunctions');
const { FILE_PATH } = require('../helpers/constants');
const { OK } = require('../helpers/statusCode');

teamsRouter.post('/', validateName, validateInitials, validateCountry, async (req, res) => {
  const { name, initials, country, league } = req.body;
  const toWrite = { team: name, initials: initials.toUpperCase(), country: country, league: league };

  const data = await readContentFile(FILE_PATH);

  if (!data) {
    await writeContentFile([toWrite]);
  }
  
  await writeContentFile(FILE_PATH, toWrite);

  return res.status(OK).json({ team: name, initials: initials.toUpperCase(), country, league });
});

teamsRouter.get('/', async (_req, res) => {
  const data = await fs.readFile(FILE_PATH, 'utf-8');
  const result = JSON.parse(data);

  if (!result) {
    return res.status(OK).json({ teams: [] });
  }
  return res.status(OK).json({ result });
});

module.exports = teamsRouter;
