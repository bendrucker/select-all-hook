# select-all-hook [![Build Status](https://travis-ci.org/bendrucker/select-all-hook.svg?branch=master)](https://travis-ci.org/bendrucker/select-all-hook)

> virtual-dom hook for selecting all text in an element


## Install

```
$ npm install --save select-all-hook
```


## Usage

```js
var h = require('virtual-dom/h')
var SelectAllHook = require('select-all-hook')

function render (state) {
  return h('input', {
    select: SelectAllHook()
  })
}
```

## API

#### `SelectAllHook()` -> `object`

Creates a virtual-dom hook that will select all text in the target element.


## License

MIT © [Ben Drucker](http://bendrucker.me)
