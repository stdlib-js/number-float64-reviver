// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";function e(e,i){if(null!==i&&"object"==typeof i&&"float64"===i.type){if("NaN"===i.value)return NaN;if("+Infinity"===i.value)return t;if("-Infinity"===i.value)return n}return i}export{e as default};
//# sourceMappingURL=index.mjs.map
