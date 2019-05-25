// Rollup plugins
import babel from 'rollup-plugin-babel'
// import { eslint } from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
// import memory from 'rollup-plugin-memory'

export default {
  input: 'src/lib/wat-type.js',
  output: {
    name: 'watType',
    file: 'dist/wat-type.js',
    sourcemap: true,
    strict: true,
    format: 'umd'
  },
  plugins: [
    // memory({
		// 	path: 'src/lib/main.js',
		// 	contents: `
		// 		console.log('Hello')
		// 	`
		// }),
    resolve({
      mainFields: [
        'module',
        'main',
        'jsnext'
      ],
      browser: true,
    }),
    commonjs(),
    // eslint(),
    babel({
      sourceMap: true,
      exclude: 'node_modules/**',
      babelrc: false,
      "presets": [
        [
          "@babel/preset-env", 
          {
            "targets": {
              "browsers": ["last 2 versions", "ie >= 7"],
              "node": "current",
              // "esmodules": true
            },
            // "modules": "umd",
            // "useBuiltIns": "entry",
            // "corejs": 3,
            // "debug": true
          }
        ]
      ],
      "plugins": [
        // ["import", {
        //   "libraryName": "watType",
        // }]
      ]
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    // (process.env.NODE_ENV && uglify())
  ]
}
