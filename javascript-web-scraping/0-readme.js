#!/usr/bin/node
const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    //[2] will be the route of the file
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});