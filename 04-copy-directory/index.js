const fs = require('fs').promises;
const path = require('path');

const sourceDir = path.join(__dirname, 'files');
const destDir = path.join(__dirname, 'files-copy');