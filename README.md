<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# randn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a [readable stream][readable-stream] for generating pseudorandom numbers drawn from a standard normal distribution.



<section class="usage">

## Usage

```javascript
import randomStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-streams-randn@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/random-streams-randn/tags). For example,

```javascript
import randomStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-streams-randn@v0.1.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory, objectMode } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-streams-randn@esm/index.mjs';
```

<a name="random-stream"></a>

#### randomStream( \[options] )

Returns a [readable stream][readable-stream] for generating pseudorandom numbers drawn from a standard normal distribution.

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

var iStream;
var stream;

function log( chunk, idx ) {
    console.log( chunk.toString() );
    if ( idx === 10 ) {
        stream.destroy();
    }
}

stream = randomStream();
iStream = inspectStream( log );

stream.pipe( iStream );
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.

-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.

-   **highWaterMark**: specifies the maximum number of bytes to store in an internal buffer before ceasing to generate additional pseudorandom numbers.

-   **sep**: separator used to join streamed data. This option is only applicable when a stream is **not** in [objectMode][object-mode]. Default: `'\n'`.

-   **iter**: number of iterations.

-   **name**: name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers. The following PRNGs are supported:

    -   [`improved-ziggurat`][@stdlib/random/base/improved-ziggurat]: improved ziggurat method.
    -   [`box-muller`][@stdlib/random/base/box-muller]: Box-Muller transform.  

    Default: [`'improved-ziggurat'`][@stdlib/random/base/improved-ziggurat].

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned iterator, one must seed the provided `prng` (assuming the provided `prng` is seedable).

-   **seed**: pseudorandom number generator seed.

-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.

-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators and/or streams. Setting this option to `true` ensures that a stream generator has exclusive control over its internal state. Default: `true`.

-   **siter**: number of iterations after which to emit the pseudorandom number generator state. This option is useful when wanting to deterministically capture a stream's underlying PRNG state. Default: `1e308`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var stream = randomStream( opts );
```

By default, the function returns a [stream][stream] which can generate an infinite number of values (i.e., the [stream][stream] will **never** end). To limit the number of generated pseudorandom numbers, set the `iter` option.

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

function log( chunk ) {
    console.log( chunk.toString() );
}

var opts = {
    'iter': 10
};

var stream = randomStream( opts );
var iStream = inspectStream( log );

stream.pipe( iStream );
```

By default, when not operating in [objectMode][object-mode], a returned [stream][stream] delineates generated pseudorandom numbers using a newline character. To specify an alternative separator, set the `sep` option.

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

function log( chunk ) {
    console.log( chunk.toString() );
}

var opts = {
    'iter': 10,
    'sep': ','
};

var stream = randomStream( opts );
var iStream = inspectStream( log );

stream.pipe( iStream );
```

By default, the underlying pseudorandom number generator is [`improved-ziggurat`][@stdlib/random/base/improved-ziggurat]. To use a different PRNG, set the `name` option.

```javascript
var opts = {
    'name': 'box-muller'
};

var stream = randomStream( opts );
```

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var opts = {
    'prng': minstd.normalized
};

var stream = randomStream( opts );
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

function log( v ) {
    console.log( v );
}

var opts = {
    'name': 'improved-ziggurat',
    'objectMode': true,
    'iter': 10,
    'seed': 1234
};

var stream = randomStream( opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

To return a [readable stream][readable-stream] with an underlying pseudorandom number generator having a specific initial state, set the `state` option.

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

function log( v ) {
    console.log( v );
}

var opts1 = {
    'name': 'improved-ziggurat',
    'objectMode': true,
    'iter': 10
};

var stream = randomStream( opts1 );

var opts2 = {
    'objectMode': true
};
var iStream = inspectStream( opts2, log );

// Stream pseudorandom numbers, thus progressing the underlying generator state:
stream.pipe( iStream );

// Create a new PRNG stream initialized to the last state of the previous stream:
var opts3 = {
    'name': 'improved-ziggurat',
    'objectMode': true,
    'iter': 10,
    'state': stream.state
};

stream = randomStream( opts3 );
iStream = inspectStream( opts2, log );

// Stream pseudorandom numbers starting from the last state of the previous stream:
stream.pipe( iStream );
```

##### stream.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var stream = randomStream();

var seed = stream.seed;
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var stream = randomStream({
    'prng': minstd
});

var seed = stream.seed;
// returns null
```

##### stream.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var stream = randomStream();

var len = stream.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var stream = randomStream({
    'prng': minstd
});

var len = stream.seedLength;
// returns null
```

##### stream.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var stream = randomStream();

var state = stream.state;
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var stream = randomStream({
    'prng': minstd
});

var state = stream.state;
// returns null
```

##### stream.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var stream = randomStream();

var len = stream.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var stream = randomStream({
    'prng': minstd
});

var len = stream.stateLength;
// returns null
```

##### stream.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var stream = randomStream();

var sz = stream.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var stream = randomStream({
    'prng': minstd
});

var sz = stream.byteLength;
// returns null
```

* * *

#### randomStream.factory( \[options] )

Returns a `function` for creating [readable streams][readable-stream] which generate pseudorandom numbers drawn from a standard normal distribution.

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var createStream = randomStream.factory( opts );
```

The method accepts the same `options` as [`randomStream()`](#random-stream).

* * *

#### randomStream.objectMode( \[options] )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

function log( v ) {
    console.log( v );
}

var opts = {
    'iter': 10
};
var stream = randomStream.objectMode( opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

This method accepts the same `options` as [`randomStream()`](#random-stream); however, the method will **always** override the [`objectMode`][object-mode] option in `options`.

* * *

### Events

In addition to the standard [readable stream][readable-stream] events, the following events are supported...

#### 'state'

Emitted after internally generating `siter` pseudorandom numbers.

```javascript
var opts = {
    'siter': 10 // emit the PRNG state every 10 pseudorandom numbers
};

var stream = randomStream( opts );

stream.on( 'state', onState );

function onState( state ) {
    // Do something with the emitted state, such as save to file...
}
```

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   **Warning**: the default underlying source of pseudorandom numbers may **change** in the future. If exact reproducibility is required, either explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
-   If PRNG state is "shared" (meaning a state array was provided during stream creation and **not** copied) and one sets the generator state to a state array having a different length, the underlying PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).
-   In order to capture the PRNG state after a specific number of generated pseudorandom numbers, regardless of internal stream buffering, use the `siter` option in conjunction with a `state` event listener. Attempting to capture the underlying PRNG state after **reading** generated numbers is **not** likely to give expected results, as internal stream buffering will mean more values have been generated than have been read. Thus, the state returned by the `state` property will likely reflect a future PRNG state from the perspective of downstream consumers.

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';
import randomStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-streams-randn@esm/index.mjs';

function log( v ) {
    console.log( v.toString() );
}

var opts = {
    'objectMode': true,
    'iter': 10
};

var stream = randomStream( opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-base/randn`][@stdlib/random/base/randn]</span><span class="delimiter">: </span><span class="description">standard normal pseudorandom numbers.</span>
-   <span class="package-name">[`@stdlib/random-iter/randn`][@stdlib/random/iter/randn]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution.</span>
-   <span class="package-name">[`@stdlib/random-streams/box-muller`][@stdlib/random/streams/box-muller]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.</span>
-   <span class="package-name">[`@stdlib/random-streams/improved-ziggurat`][@stdlib/random/streams/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat algorithm.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-streams-randn.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-streams-randn

[test-image]: https://github.com/stdlib-js/random-streams-randn/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/random-streams-randn/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-streams-randn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-streams-randn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-streams-randn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-streams-randn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/random-streams-randn#cli
[cli-url]: https://github.com/stdlib-js/random-streams-randn/tree/cli
[@stdlib/random-streams-randn]: https://github.com/stdlib-js/random-streams-randn/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-streams-randn/tree/deno
[umd-url]: https://github.com/stdlib-js/random-streams-randn/tree/umd
[esm-url]: https://github.com/stdlib-js/random-streams-randn/tree/esm
[branches-url]: https://github.com/stdlib-js/random-streams-randn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-streams-randn/main/LICENSE

[stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[readable-stream]: https://nodejs.org/api/stream.html

[@stdlib/random/base/improved-ziggurat]: https://github.com/stdlib-js/random-base-improved-ziggurat/tree/esm

[@stdlib/random/base/box-muller]: https://github.com/stdlib-js/random-base-box-muller/tree/esm

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/esm

<!-- <related-links> -->

[@stdlib/random/base/randn]: https://github.com/stdlib-js/random-base-randn/tree/esm

[@stdlib/random/iter/randn]: https://github.com/stdlib-js/random-iter-randn/tree/esm

[@stdlib/random/streams/box-muller]: https://github.com/stdlib-js/random-streams-box-muller/tree/esm

[@stdlib/random/streams/improved-ziggurat]: https://github.com/stdlib-js/random-streams-improved-ziggurat/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
