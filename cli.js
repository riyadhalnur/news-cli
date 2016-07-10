#!/usr/bin/env node
'use strict';

const meow = require('meow');
const updateNotifier = require('update-notifier');
const chalk = require('chalk');
const pkg = require('./package.json');
const news = require('./index.js');

const cli = meow(`
	Usage
	  $ news <source>

    Choose which source to display news from. Defaults to techcrunch.
	Options
	  --sort Choose to show latest, top or popular news. Defaults to latest.
	Examples
	  $ news
	  $ news hackernews --sort top
`);

updateNotifier({ pkg }).notify();

news(cli.input[0], cli.flags).then(data => {
  console.log(`Showing news from ${chalk.red.bold(data.source)}. Powered by NewsAPI.org.`);

  data.articles.forEach((article, index) => {
    console.log(`\n${chalk.green.bold(index + 1)}. ${chalk.yellow(article.title)}`);
    console.log(`${chalk.red.bold('Link:')} ${chalk.blue.underline(article.url)}`);
  });
}).catch(err => {
  console.error(err);
});
