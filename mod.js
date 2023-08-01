// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function r(r,u){if(null!==u&&"object"==typeof u&&"float64"===u.type){if("NaN"===u.value)return NaN;if("+Infinity"===u.value)return e;if("-Infinity"===u.value)return t}return u}export{r as default};
//# sourceMappingURL=mod.js.map
