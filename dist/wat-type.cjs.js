'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Import a logger for easier debugging.
const debug = require('debug');
const log = debug('app:log');

// The logger should only be disabled if we’re not in production.
{
  debug.disable();
}
// import 'core-js'
// import 'regenerator-runtime/runtime'
const watType = (type) => {
  let _type = /^\[.+\ +(.+)\]$/.exec(Object.prototype.toString.call(type))[1];

  if (_type === 'Number') {
    _type = type !== type ? 'NaN' : _type;
  }
  if (_type.startsWith('HTML') && _type.endsWith('Element')) {
    _type = 'HTMLElement';
  }
  // [object String]
  // [object Number]
  // [object Boolean
  // [object Null]
  // [object Undefined]
  // [object Object]
  // [object RegExp]
  // [object Function]
  // [object Array]
  // TODO: figure out Symbol type

  return _type
};

const isString = (type) => {
  return watType(type) === 'String'
};

const isNumber = (type) => {
  return watType(type) === 'Number'
};

const isBoolean = (type) => {
  return watType(type) === 'Boolean'
};

const isNull = (type) => {
  return watType(type) === 'Null'
};

const isUndefined = (type) => {
  return watType(type) === 'Undefined'
};

const isNaN = (type) => {
  return watType(type) === 'NaN'
};

const isObject = (type) => {
  return watType(type) === 'Object'
};

const isFunction = (type) => {
  return watType(type) === 'Function'
};

const isRegExp = (type) => {
  return watType(type) === 'RegExp'
};

const isHTMLElement = (type) => {
  return watType(type) === 'HTMLElement'
};

var watType$1 = {
  watType,
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  isNaN,
  isObject,
  isFunction,
  isRegExp,
  isHTMLElement
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
