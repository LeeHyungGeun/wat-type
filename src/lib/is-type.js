import '@babel/polyfill'
const isType = (type) => {
  let _type = /^\[.+\ +(.+)\]$/.exec(Object.prototype.toString.call(type))[1]

  if (_type === 'Number') {
    _type = type !== type ? 'NaN' : _type
  }
  if (_type.startsWith('HTML') && _type.endsWith('Element')) {
    _type = 'HTMLElement'
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
}

const isString = (type) => {
  return isType(type) === 'String'
}

const isNumber = (type) => {
  return isType(type) === 'Number'
}

const isBoolean = (type) => {
  return isType(type) === 'Boolean'
}

const isNull = (type) => {
  return isType(type) === 'Null'
}

const isUndefined = (type) => {
  return isType(type) === 'Undefined'
}

const isNaN = (type) => {
  return isType(type) === 'NaN'
}

const isObject = (type) => {
  return isType(type) === 'Object'
}

const isFunction = (type) => {
  return isType(type) === 'Function'
}

const isRegExp = (type) => {
  return isType(type) === 'RegExp'
}

const isArray = (type) => {
  return isType(type) === 'Array'
}

const isHTMLElement = (type) => {
  return isType(type) === 'HTMLElement'
}

export default {
  isType,
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
}

export {
  isType,
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
}