'use strict'

var partial = require('ap').partial
var SelectHook = require('select-hook')

module.exports = partial(SelectHook, {start: 0, end: 9999})
