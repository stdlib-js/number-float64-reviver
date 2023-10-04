<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reviveNumber

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Revive a JSON-serialized number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import reviveNumber from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-reviver@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/number-float64-reviver/tags). For example,

```javascript
import reviveNumber from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-reviver@v0.1.1-esm/index.mjs';
```

#### reviveNumber( key, value )

Revives a JSON-serialized number.

```javascript
import parseJSON from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs';

var str = '{"type":"float64","value":"NaN"}';

var buf = parseJSON( str, reviveNumber );
// returns NaN
```

For details on the JSON serialization format, see [`@stdlib/number-float64/to-json`][@stdlib/number/float64/to-json].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import parseJSON from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs';
import number2json from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-to-json@esm/index.mjs';
import reviveNumber from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-reviver@esm/index.mjs';

var str = JSON.stringify( number2json( NaN ) );
console.log( str );
// => '{"type":"float64","value":"NaN"}'

var out = parseJSON( str, reviveNumber );
if ( out instanceof Error ) {
    throw out;
}
console.log( out );
// => NaN

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number-float64/to-json`][@stdlib/number/float64/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-reviver.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-reviver

[test-image]: https://github.com/stdlib-js/number-float64-reviver/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/number-float64-reviver/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-reviver/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-reviver?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-reviver.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-reviver/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-reviver/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float64-reviver/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float64-reviver/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float64-reviver/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-reviver/main/LICENSE

[@stdlib/number/float64/to-json]: https://github.com/stdlib-js/number-float64-to-json/tree/esm

</section>

<!-- /.links -->
