const { expect } = require('chai');

describe('Mocha', function () {

  it('should run our tests using npm', function () {
    expect(true).to.be.ok;
  })
})

describe('Configuration File', () => {
  const config = require('../src/config');
  it('flickr API Key should not be null', function () {
    
    expect(config.flickrApiKey).to.not.equal(null);
    
  })
  it('Giphy API Key should not be null', function () {
    
    expect(config.giphyApiKey).to.not.equal(null);
  })
});