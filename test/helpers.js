var assert = require('assert');

var braces = require('..').new();

test('helper', function() {
    var template = braces.compile('{{#foobar/}}');
    braces.register('foobar', function() {
        return 'replaced';
    });

    var locals = {};
    var expected = 'replaced';

    var rendered = template.render(locals);
    assert.equal(rendered, expected);

    // render compiled for client
    var func = eval('(' + template.toString() + ')');
    var actual = func.call(locals);
    assert.equal(actual, expected);
});
