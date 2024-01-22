const fs = require('fs');
const readline = require('readline');
const path = require('path');

const fileStream = fs.createWriteStream(path.join(__dirname, 'output.txt'), { flags: 'a' });

