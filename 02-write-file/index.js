const fs = require('fs');
const readline = require('readline');
const path = require('path');

const fileStream = fs.createWriteStream(path.join(__dirname, 'output.txt'), { flags: 'a' });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display a welcome message
console.log('Welcome! Enter some text. Type "exit" to quit.');

// Function to handle input
const handleInput = (input) => {
  if (input.trim().toLowerCase() === 'exit') {
    console.log('Goodbye!');
    rl.close();
  } else {
    fileStream.write(input + '\n', 'utf8');
  }
};

rl.on('line', handleInput);
