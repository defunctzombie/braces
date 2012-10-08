var assert = require('assert');
var fs = require('fs');
var path = require('path');

var braces = require('../');

var root = path.join(__dirname, 'fixtures');

[
  'tenthousand',
  'boolean',
  'carriage_return',
  'comments',
  'complex',
  'error_not_found',
  'escaped',
  'hash_instead_of_array',
  'recursion_with_same_names',
  'reuse_of_enumerables',
  'simple',
  'twice',
  'two_in_a_row',
  //'inverted',
  //'dot_notation',
  //'unescaped'
].forEach(function (name) {

  test(name, function() {
    var js = fs.readFileSync(path.join(root, name + '.js'), 'utf8');
    var expected = fs.readFileSync(path.join(root, name + '.txt'), 'utf8');
    var html = fs.readFileSync(path.join(root, name + '.html'), 'utf8');

    // eval to get the javascript object
    var locals = eval('(' + js + ')');

    var template = braces.new().compile(html);

    // compare non string execution to expected
    var actual = template.render(locals);
    assert.equal(actual, expected);

    // compare string generated version to expected
    var func = eval('(' + template.toString() + ')');
    var acutal = func.call(locals);
    assert.equal(actual, expected);
  });
});
