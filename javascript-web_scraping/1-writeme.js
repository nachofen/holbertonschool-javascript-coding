#!/usr/bin/node
const fs = require('fs');
const fPath = process.argv[2];
const toWrite = process.argv[3];

// [2] will be the route of the file, [3] the text to write
fs.writeFile(fPath, toWrite, 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});
