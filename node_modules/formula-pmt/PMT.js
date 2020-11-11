(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-isnumber', 'formula-errors'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-isnumber'), require('formula-errors'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.isnumber, global.error);
    global.PMT = mod.exports;
  }
})(this, function (exports, module, _formulaIsnumber, _formulaErrors) {
  'use strict';

  module.exports = PMT;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isnumber = _interopRequireDefault(_formulaIsnumber);

  var _error = _interopRequireDefault(_formulaErrors);

  function PMT(rate, periods, present) {
    var future = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
    var type = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];

    if (!(0, _isnumber['default'])(rate) || !(0, _isnumber['default'])(periods)) {
      return _error['default'].value;
    }

    if (rate === 0) {
      return -((present + future) / periods);
    } else {
      var term = Math.pow(1 + rate, periods);
      if (type === 1) {
        return -((future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate));
      } else {
        return -(future * rate / (term - 1) + present * rate / (1 - 1 / term));
      }
    }
  }

  ;
});
