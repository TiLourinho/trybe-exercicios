const fs = require('fs').promises;

const treatAll = async() => {
  const promises = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const newFiles = promises.map((file, index) => {
      fs.writeFile(`./exercicios/file${index + 1}.txt`, file)
    }
  );

  await Promise.all(newFiles);
  
  const files = [
    './exercicios/file1.txt',
    './exercicios/file2.txt',
    './exercicios/file3.txt',
    './exercicios/file4.txt',
    './exercicios/file5.txt',
  ];

  const readFiles = await Promise.all(
    files.map(file => fs.readFile(file, 'utf-8'))
  );

  const joinFiles = readFiles.join(' ');

  await fs.writeFile('./exercicios/fileAll.txt', joinFiles);
}
treatAll();