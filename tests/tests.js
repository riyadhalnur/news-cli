'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

const news = require('../index.js');

describe('News CLI', () => {
  it('should get the news', (done) => {
    let helper = news(null, {});
    return helper.should.be.fulfilled.and.notify(done);
  });

  it('should get the top news from techcrunch by default', (done) => {
    let helper = news(null, {});
    return helper.should.eventually.have.property('articles').notify(done);
  });

  it('should get the latest news from hackernews', (done) => {
    let helper = news('hackernews', {sort: 'latest'});
    return helper.should.eventually.have.property('articles').notify(done);
  });
});
