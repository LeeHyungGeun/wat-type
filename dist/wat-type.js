(function(global,factory){if(typeof define==="function"&&define.amd){define(["exports","core-js/shim"],factory)}else if(typeof exports!=="undefined"){factory(exports,require("core-js/shim"))}else{var mod={exports:{}};factory(mod.exports,global.shim);global.watType=mod.exports}})(this,function(_exports,_shim){"use strict";Object.defineProperty(_exports,"__esModule",{value:true});_exports.isHTMLElement=_exports.isRegExp=_exports.isFunction=_exports.isObject=_exports.isNaN=_exports.isUndefined=_exports.isNull=_exports.isBoolean=_exports.isNumber=_exports.isString=_exports.watType=_exports.default=void 0;const watType=type=>{let _type=/^\[.+\ +(.+)\]$/.exec(Object.prototype.toString.call(type))[1];if(_type==="Number"){_type=type!==type?"NaN":_type}if(_type.startsWith("HTML")&&_type.endsWith("Element")){_type="HTMLElement"}// [object String]
// [object Number]
// [object Boolean
// [object Null]
// [object Undefined]
// [object Object]
// [object RegExp]
// [object Function]
// [object Array]
// TODO: figure out Symbol type
return _type};_exports.watType=watType;const isString=type=>{return watType(type)==="String"};_exports.isString=isString;const isNumber=type=>{return watType(type)==="Number"};_exports.isNumber=isNumber;const isBoolean=type=>{return watType(type)==="Boolean"};_exports.isBoolean=isBoolean;const isNull=type=>{return watType(type)==="Null"};_exports.isNull=isNull;const isUndefined=type=>{return watType(type)==="Undefined"};_exports.isUndefined=isUndefined;const isNaN=type=>{return watType(type)==="NaN"};_exports.isNaN=isNaN;const isObject=type=>{return watType(type)==="Object"};_exports.isObject=isObject;const isFunction=type=>{return watType(type)==="Function"};_exports.isFunction=isFunction;const isRegExp=type=>{return watType(type)==="RegExp"};_exports.isRegExp=isRegExp;const isArray=type=>{return watType(type)==="Array"};const isHTMLElement=type=>{return watType(type)==="HTMLElement"};_exports.isHTMLElement=isHTMLElement;var _default={watType,isString,isNumber,isBoolean,isNull,isUndefined,isNaN,isObject,isFunction,isRegExp,isHTMLElement};_exports.default=_default});

//# sourceMappingURL=wat-type.js.map