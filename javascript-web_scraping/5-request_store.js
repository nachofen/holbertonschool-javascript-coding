#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const loremUrl = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  fs.writeFile(loremUrl, body, 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
});
