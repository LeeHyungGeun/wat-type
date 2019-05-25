# is-type.js
function utils to check type
: `string`, `number`, `boolean`, `null`, `undefined`, `object`, `NaN`, `function`, `RegExp`, `HTMLElement`

## Install
``` js
npm i --save wat-type
```

## How to use
ES6 (Import/Export)
``` js
import watType from 'wat-type'

watType.watType(NaN) // NaN
watType.isString('LeeHyungGeun') // true
watType.isNumber(35) // true
watType.isBoolean(false) // true
watType.isNull(null) // true
watType.isUndefined(undefined) // true
watType.isNaN(NaN) // true
watType.isObject({}) // true
watType.isFunction(function() {}) // true
watType.isRegExp(/LeeHyungGeun/) // true
```

ES3
``` html
<script src="../dist/wat-type.umd.js"></script>
<script>
watType.watType(NaN) // NaN
watType.isString('LeeHyungGeun') // true
watType.isNumber(35) // true
watType.isBoolean(false) // true
watType.isNull(null) // true
watType.isUndefined(undefined) // true
watType.isNaN(NaN) // true
watType.isObject({}) // true
watType.isFunction(function() {}) // true
watType.isRegExp(/LeeHyungGeun/) // true
watType.isHTMLElement(document.createElement('div')) // true
</script>
```

