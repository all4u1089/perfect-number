var expect = require('chai').expect;
var check = require('../src/index.js');

describe('Check perfect number test case', () => {

  it('returns error when value is "a"', (done) => {
    check.isPerfectNumber('a', (err) => {
      expect(err).to.not.equal(null);
      expect(err.message).to.equal('it must be a numeric');
      done();
    });
  });

  it('returns error when value is -6.2', (done) => {
    check.isPerfectNumber(-6.2, (err) => {
      expect(err).to.not.equal(null);
      expect(err.message).to.equal('number must be integer');
      done();
    });
  });

  it('returns error when value is -6', (done) => {
    check.isPerfectNumber(-6, (err) => {
      expect(err).to.not.equal(null);
      expect(err.message).to.equal('number must be positive');
      done();
    });
  });

  it('returns true when value is 6', (done) => {
    check.isPerfectNumber(6, (err, s) => {
      expect(err).to.equal(null);
      expect(s).to.equal(true);
      done();
    });
  });

  it('returns false when value is 7', (done) => {
    check.isPerfectNumber(7, (err, s) => {
      expect(err).to.equal(null);
      expect(s).to.equal(false);
      done();
    });
  });

  it('returns true when value is 28', (done) => {
    check.isPerfectNumber(28, (err, s) => {
      expect(err).to.equal(null);
      expect(s).to.equal(true);
      done();
    });
  });
});
