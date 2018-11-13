# select-all-hook [![Build Status](https://travis-ci.org/bendrucker/select-all-hook.svg?branch=master)](https://travis-ci.org/bendrucker/select-all-hook) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/select-all-hook.svg)](https://greenkeeper.io/)

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

#### `SelectAllHook([predicate])` -> `object`

Creates a virtual-dom hook that will select all text in the target element.

##### predicate

Type: `function`

An optional function predicate. If provided, the hook will only be applied when the predicate evaluates to truthy.


## License

MIT © [Ben Drucker](http://bendrucker.me)
