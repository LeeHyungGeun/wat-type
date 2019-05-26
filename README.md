<p align="left">
  <a href="https://npmcharts.com/compare/wat-type?minimal=true"><img src="https://img.shields.io/npm/dm/wat-type.svg" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/wat-type"><img src="https://img.shields.io/npm/v/wat-type.svg" alt="Version"></a>
</p>

# wat-type.js
function utils to check type
: `string`, `number`, `boolean`, `null`, `undefined`, `object`, `NaN`, `function`, `RegExp`, `HTMLElement`

## Install
``` js
npm i --save wat-type
```

## How to use
ESM (Import/Export) / CommonJS
``` js
import watType from 'wat-type' // ESM
const watType = require('wat-type') // CommonJS

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
<script src="../dist/wat-type.js"></script>
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

