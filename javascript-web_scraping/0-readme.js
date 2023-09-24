#!/usr/bin/node
const fs = require('fs');

// [2] will be the route of the file
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
