var assert = require('assert');
var isnumber = require('./ISNUMBER');
describe('isnumber', function() {
  it('should identify numbers', function() {
    assert( isnumber(1) );
    assert( isnumber(1.0) );
    assert( isnumber(1.5) );
    assert( isnumber("foo") === false );
  });
})
