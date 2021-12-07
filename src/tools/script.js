const fs = require('fs');
const https = require('https');

const movies = require('../mock/movies.json');
// eslint-disable-next-line import/extensions
const { random } = require('../utils/math.js');

const results = movies.movies
  .filter((item) => !!item.posterUrl)
  .map((item) => new Promise((resolve) => {
    https.get(item.posterUrl, (res) => {
      if (res.statusCode === 200) {
        const rating = (random(30, 95) / 10).toFixed(1);
        resolve({
          ...item,
          rating,
        });
      } else {
        resolve(null);
      }
    })
      .on('error', () => {
        resolve(null);
      });
  }));

Promise.all(results)
  .then((res) => {
    const checked = res.filter((item) => item !== null);
    fs.writeFile('./output.json', JSON.stringify(checked), (err) => console.log(err));
  });
