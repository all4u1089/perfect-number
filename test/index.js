var expect = require('chai').expect;
var check = require('../src/index.js');

describe('Check perfect number test case', function() {

  it('returns error when value is not numeric', function(done) {
    check.isPerfectNumber('x', function(err, s) {
      expect(err).to.not.equal(null);
      expect(err.message).to.equal('it must be a numeric');
      done();
    });
  });

  it('returns error when value is not positive', function(done) {
    check.isPerfectNumber(-6, function(err, s) {
      expect(err).to.not.equal(null);
      expect(err.message).to.equal('number must be positive');
      done();
    });
  });

  it('returns true when value is 6', function(done) {
    check.isPerfectNumber(6, function(err, s) {
      expect(err).to.equal(null);
      expect(s).to.equal(true);
      done();
    });
  });

  it('returns false when value is 7', function(done) {
    check.isPerfectNumber(7, function(err, s) {
      expect(err).to.equal(null);
      expect(s).to.equal(false);
      done();
    });
  });

  it('returns true when value is 28', function(done) {
    check.isPerfectNumber(28, function(err, s) {
      expect(err).to.equal(null);
      expect(s).to.equal(true);
      done();
    });
  });
});
