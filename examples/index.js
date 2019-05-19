import * as watType from '../dist/wat-type'

console.log(watType.watType(NaN))
console.log(watType.isString('LeeHyungGeun'))
console.log(watType.isNumber(35))
console.log(watType.isBoolean(false))
console.log(watType.isNull(null))
console.log(watType.isUndefined(undefined))
console.log(watType.isNaN(NaN))
console.log(watType.isObject({}))
console.log(watType.isFunction(function() {}))
console.log(watType.isRegExp(/LeeHyungGeun/))
