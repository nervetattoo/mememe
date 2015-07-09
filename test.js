var test = require('tape')
var mememe = require('./index')

test('mememe', function(t) {
    t.plan(2)

    var me = 'me'
    t.equal(me, mememe(me))
    t.notEqual('you', mememe(me))
})
