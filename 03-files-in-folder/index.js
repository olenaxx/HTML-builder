const fs = require('fs').promises;
const path = require('path');

const secretFolder = path.join(__dirname, 'secret-folder');

async function displayFilesInfo() {
  try {
    const files = await fs.readdir(secretFolder, { withFileTypes: true });

    for (const file of files) {
      if (file.isFile()) {
        const filePath = path.join(secretFolder, file.name);
        const fileStat = await fs.stat(filePath);
        const fileSize = fileStat.size / 1024;
        const fileExtension = path.extname(file.name).slice(1);
        const fileName = path.basename(file.name, path.extname(file.name));

        console.log(`${fileName} - ${fileExtension} - ${fileSize.toFixed(3)}kb`);
      }
    }
  } catch (error) {
    console.error('Error reading the directory', error);
  }
}

displayFilesInfo();