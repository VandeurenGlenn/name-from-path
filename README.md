# name-from-path [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
>

## Installation

```sh
$ npm install --save name-from-path
```

## Usage

```js
const nameFromPath = require('name-from-path');

nameFromPath('some-path-to/Rainbow.txt'); // returns Rainbow.text
```

## options

### Strip extension
```js
const nameFromPath = require('name-from-path');

nameFromPath('some-path-to/Rainbow.txt', true); // returns Rainbow
```

## License

Apache-2.0 © [Glenn Vandeuren]()


[npm-image]: https://badge.fury.io/js/name-from-path.svg
[npm-url]: https://npmjs.org/package/name-from-path
[travis-image]: https://travis-ci.org/VandeurenGlenn/name-from-path.svg?branch=master
[travis-url]: https://travis-ci.org/VandeurenGlenn/name-from-path
[daviddm-image]: https://david-dm.org/VandeurenGlenn/name-from-path.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/VandeurenGlenn/name-from-path
