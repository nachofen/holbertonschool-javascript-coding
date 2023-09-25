#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  let times = 0;
  const movies = JSON.parse(body);
  movies.results.forEach(movie => {
    movie.characters.forEach(character => {
      if (character.includes('/people/18')) times++;
    });
  });
  console.log(times);
});
