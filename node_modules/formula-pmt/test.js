var pmt = require('./PMT');
var error = require('formula-errors');
require('should');

describe('pmt', function() {
  it('should calculate payments', function() {
    pmt(0.06 / 12, 18 * 12, 0, 50000).should.approximately(-129.0811608679973, 1e-9);
    pmt(0.1 / 12, 2 * 12, 100000, 1000000, 1).should.approximately(-42075.45683100995, 1e-9);
    pmt(0.1 / 12, 2 * 12, 100000, 1000000).should.approximately(-42426.08563793503, 1e-9);
    pmt(0.1 / 12, 2 * 12, 0, 1000000).should.approximately(-37811.59300418336, 1e-9);
    pmt(0.1 / 12, 2 * 12, 100000).should.approximately(-4614.49263375167, 1e-9);
    pmt(0, 2 * 12, 100000).should.approximately(-4166.666666666667, 1e-9);
    pmt('invalid', 2 * 12, 100000).should.equal(error.value);
    pmt(1, 'invalid', 100000).should.equal(error.value);
  });
});
