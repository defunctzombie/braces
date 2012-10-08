
// local
var vm = require('./vm');

var Template = function(helpers, modifiers, tree) {
    var self = this;
    self.helpers = helpers;
    self.modifiers = modifiers;
    self.tree = tree;
};

Template.prototype.render = function(locals) {
    var self = this;
    return vm.runtime_render(locals, self.modifiers, self.helpers, self.tree);
};

// return a string representation of the template
// the string representation can be executed standalone
// TODO omit the block/tag functions since they can be shipped to the user separately
// for a user who is generating many of these templates for client use
// this is extra overhead
Template.prototype.toString = function() {
    var self = this;

    var helpers = self.helpers;
    var modifiers = self.modifiers;

    // render me!!
    var src = 'var helpers = {};\n'

    for (var name in helpers) {
        src += 'helpers.' + name + ' = ' + helpers[name].toString() + ';\n\n';
    }

    src += 'var modifiers = {};\n'

    for (var name in modifiers) {
        src += 'modifiers.' + name + ' = ' + modifiers[name].toString() + ';\n\n';
    }

    src += vm.block.toString() + ';\n\n';
    src += vm.tag.toString() + ';\n\n';

    src += vm.to_js(self.tree) + ';';

    var func = new Function(src);
    return func.toString();
};

module.exports = Template;
