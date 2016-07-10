'use strict';

const got = require('got');

const apiKey = '962728e1eba74fcc804e8138d85513cc';
const newsUrl = 'https://newsapi.org/v1/articles';

const news = (input, options) => {
  let query = {
    source: input ? input : 'techcrunch',
    apiKey: apiKey,
    sortBy: options.sort ? options.sort : 'top'
  };

  return new Promise((resolve, reject) => {
    got(newsUrl, { query: query }).then(response => {
      return resolve(JSON.parse(response.body));
    }).catch(err => {
      reject(err);
    });
  });
};

module.exports = news;
