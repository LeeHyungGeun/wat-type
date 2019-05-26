(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.watType = {}));
}(this, function (exports) { 'use strict';

  var watType = function watType(type) {
    var _type = /^\[.+\ +(.+)\]$/.exec(Object.prototype.toString.call(type))[1];

    if (_type === 'Number') {
      _type = type !== type ? 'NaN' : _type;
    }

    if (_type.startsWith('HTML') && _type.endsWith('Element')) {
      _type = 'HTMLElement';
    } // [object String]
    // [object Number]
    // [object Boolean
    // [object Null]
    // [object Undefined]
    // [object Object]
    // [object RegExp]
    // [object Function]
    // [object Array]
    // TODO: figure out Symbol type


    return _type;
  };

  var isString = function isString(type) {
    return watType(type) === 'String';
  };

  var isNumber = function isNumber(type) {
    return watType(type) === 'Number';
  };

  var isBoolean = function isBoolean(type) {
    return watType(type) === 'Boolean';
  };

  var isNull = function isNull(type) {
    return watType(type) === 'Null';
  };

  var isUndefined = function isUndefined(type) {
    return watType(type) === 'Undefined';
  };

  var isNaN = function isNaN(type) {
    return watType(type) === 'NaN';
  };

  var isObject = function isObject(type) {
    return watType(type) === 'Object';
  };

  var isFunction = function isFunction(type) {
    return watType(type) === 'Function';
  };

  var isRegExp = function isRegExp(type) {
    return watType(type) === 'RegExp';
  };

  var isHTMLElement = function isHTMLElement(type) {
    return watType(type) === 'HTMLElement';
  };

  var watType$1 = {
    watType: watType,
    isString: isString,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isNull: isNull,
    isUndefined: isUndefined,
    isNaN: isNaN,
    isObject: isObject,
    isFunction: isFunction,
    isRegExp: isRegExp,
    isHTMLElement: isHTMLElement
  };

  exports.default = watType$1;
  exports.isBoolean = isBoolean;
  exports.isFunction = isFunction;
  exports.isHTMLElement = isHTMLElement;
  exports.isNaN = isNaN;
  exports.isNull = isNull;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isRegExp = isRegExp;
  exports.isString = isString;
  exports.isUndefined = isUndefined;
  exports.watType = watType;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=wat-type.js.map
