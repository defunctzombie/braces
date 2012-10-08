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

test('execute context', function() {
    var template = braces.compile('{{#foobar}}hello {{name}}{{/foobar}}');
    braces.register('foobar', function(context) {
        return context({ name: 'baz' });
    });

    var locals = {};
    var expected = 'hello baz';

    var rendered = template.render(locals);
    assert.equal(rendered, expected);

    // render compiled for client
    var func = eval('(' + template.toString() + ')');
    var actual = func.call(locals);
    assert.equal(actual, expected);
});
