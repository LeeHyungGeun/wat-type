# is-type.js
function utils to check type
: `string`, `number`, `boolean`, `null`, `undefined`, `object`, `NaN`, `function`, `RegExp`, `HTMLElement`

## How to use
ES3
``` html
<script src="../dist/is-type.js"></script>
<script>
isType.isType(NaN) // NaN
isType.isString('LeeHyungGeun') // true
isType.isNumber(35) // true
isType.isBoolean(false) // true
isType.isNull(null) // true
isType.isUndefined(undefined) // true
isType.isNaN(NaN) // true
isType.isObject({}) // true
isType.isFunction(function() {}) // true
isType.isRegExp(/LeeHyungGeun/) // true
isType.isHTMLElement(document.createElement('div')) // true
</script>
```

ES6 (Module/Import)
``` js
import * as isType from 'is-type'

isType.isType(NaN) // true
isType.isString('LeeHyungGeun') // true
isType.isNumber(35) // true
isType.isBoolean(false) // true
isType.isNull(null) // true
isType.isUndefined(undefined) // true
isType.isNaN(NaN) // true
isType.isObject({}) // true
isType.isFunction(function() {}) // true
isType.isRegExp(/LeeHyungGeun/) // true
```