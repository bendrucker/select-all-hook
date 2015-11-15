'use strict'

var SelectHook = require('select-hook')

module.exports = function SelectAllHook (predicate) {
  if (typeof predicate !== 'function' || predicate()) {
    return SelectHook({start: 0, end: 9999})
  }
}
