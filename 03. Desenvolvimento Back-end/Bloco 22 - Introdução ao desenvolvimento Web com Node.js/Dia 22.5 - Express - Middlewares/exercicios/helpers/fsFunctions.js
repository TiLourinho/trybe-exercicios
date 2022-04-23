const fs = require('fs').promises;

const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf-8');
    const contentOutput = JSON.parse(content);

    return contentOutput;
  } catch (err) {
    console.log(`readContentFile error: ${err}`);
    return null;
  }
};

const writeContentFile = async (path, load) => {
  try {
    const content = await readContentFile(path);
    content.push(load);

    await fs.writeFile(path, JSON.stringify(content));

    return content;
  } catch (err) {
    console.log(`writeContentFile error: ${err}`);
    return null;
  }
};

module.exports = {
  readContentFile,
  writeContentFile,
};