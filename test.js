'use strict'

var test = require('tape')
var SelectAllHook = require('./')

test(function (t) {
  t.plan(2)

  var selectAll = SelectAllHook()
  selectAll.hook({
    setSelectionRange: function setSelectionRange (start, end) {
      t.equal(start, 0)
      t.equal(end, 9999)
    }
  })
})
