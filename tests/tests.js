'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

const news = require('../index.js');

describe('News CLI', () => {
  it('should get the news', () => {
    let helper = news(null, {});
    return helper.should.be.fulfilled;
  });

  it('should get the top news from techcrunch by default', () => {
    let helper = news(null, {});
    return helper.should.eventually.have.property('articles');
  });

  it('should get the latest news from hackernews', () => {
    let helper = news('hackernews', {sort: 'latest'});
    return helper.should.eventually.have.property('articles');
  });
});
