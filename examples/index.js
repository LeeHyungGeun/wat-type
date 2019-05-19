import * as isType from '../dist/is-type'

console.log(isType.isType(NaN))
console.log(isType.isString('LeeHyungGeun'))
console.log(isType.isNumber(35))
console.log(isType.isBoolean(false))
console.log(isType.isNull(null))
console.log(isType.isUndefined(undefined))
console.log(isType.isNaN(NaN))
console.log(isType.isObject({}))
console.log(isType.isFunction(function() {}))
console.log(isType.isRegExp(/LeeHyungGeun/))
