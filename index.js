
var Braces = require('./lib/braces');

// expose the braces class
module.exports.Braces = Braces;

// create empty brace objects
module.exports.new = function(opt) {
    return new Braces(opt);
};

var default_env;
module.exports.compile = function(source) {
    if (!default_env) {
        default_env = new Braces();
    }

    return default_env.compile(source);
};

