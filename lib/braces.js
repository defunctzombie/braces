
// locals
var parser = require('./parser');
var modifiers = require('./modifiers');
var Template = require('./template');

var Braces = function(opt) {
    var self = this;

    self.helpers = {};

    // set default modifiers
    self.modifiers = {
        escape: modifiers.escape_html
    };
};

Braces.prototype.register = function(name, funct) {
    var self = this;
    self.helpers[name] = funct;
};

/// compile given source file into a template
Braces.prototype.compile = function(str) {
    var self = this;

    var tree = parser.parse(str);

    // should the template bake in the helpers and modifiers?
    return new Template(self.helpers, self.modifiers, tree);
};

module.exports = Braces;

