const fs = require('fs');

const contentWriter = (fileName, fileContent) => {
  try {
    fs.writeFileSync(`./${fileName}`, fileContent);

    return 'Ok';
  } catch (error) {
    console.error(err.message);
  }
}

module.exports = contentWriter;
