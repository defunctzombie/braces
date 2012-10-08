
module.exports.to_js = to_js;
module.exports.runtime_render = runtime_render;
module.exports.tag = tag;
module.exports.block = block;

// compile the ast into a callable form
function to_js(ast) {

    if (!ast) {
        return '';
    }

    var out = 'return \'\'';

    if (ast instanceof Array) {
        ast.forEach(function(node) {
            out += to_js(node);
        });
    }
    else if (typeof ast === 'string' || ast instanceof String) {
        return ' + \'' + ast.replace(/[\n\r\']/g, function(char) {
            switch (char) {
            case '\n': return '\\n';
            case '\r': return '\\r';
            case '\'': return '\\\'';
            }
        }) + '\'';
    }
    else if (ast) {
        // if has content, then this is a block
        if (ast.type === 'block') {

            var name = ast.open.path;
            var args = ast.open.args;

            // the function passed in must be called with

            // if multiple args, pass those as well
            // this compiled the body of the block so it cal be called
            if (ast.content) {
                var compiled = to_js(ast.content);
                var func = new Function('locals', compiled);
            }
            else {
                // no op function
                var func = new Function('');
            }

            return ' + block(locals, helpers, \'' + name + '\',' + func + ')';
        }

        var path = ast.path;

        // TODO mods
        return ' + tag(locals, modifiers, \'' + path + '\')';
    }

    return out;
}

function runtime_render(locals, modifiers, helpers, ast) {

    if (!ast) {
        return '';
    }

    var out = '';

    if (ast instanceof Array) {
        for (var i=0 ; i<ast.length ; ++i) {
            out += runtime_render(locals, modifiers, helpers, ast[i]);
        }
    }
    else if (typeof ast === 'string' || ast instanceof String) {
        return ast;
    }
    else if (ast) {
        // if has content, then this is a block
        if (ast.type === 'block') {

            var name = ast.open.path;
            var args = ast.open.args;

            // TODO args

            // the function passed in must be called with
            if (ast.content) {
                return block(locals, helpers, name, function(locals) {
                    return runtime_render(locals, modifiers, helpers, ast.content);
                });
            }

            return block(locals, helpers, name, function() {
                return '';
            });
        }

        var path = ast.path;

        return tag(locals, modifiers, path);
    }

    return out;
}


function tag(locals, modifiers, name, mods) {
    var value = locals[name];

    if (value === undefined || value === null) {
        return '';
    }

    if (value instanceof Function) {
        value = value.call(locals);
    }

    if (mods) {
        mods.forEach(function(mod) {
            value = modifiers[mod](value);
        });
    }

    // TODO if user does not want to apply escape modifier
    if (typeof value === 'string') {
        value = modifiers.escape(value);
    }

    return value;
}

function block(locals, helpers, name, func) {

    var helper = helpers[name];
    if (helper) {
        return helper.call(locals, func);
    }

    var variable = locals[name];

    if (!variable) {
        return '';
    }

    if (variable instanceof Function) {
        if (!variable.call(locals)) {
            return '';
        }

        return func.call(locals, locals);
    }

    var out = '';
    if (variable instanceof Array) {
        for (var i=0 ; i<variable.length ; ++i) {
            var val = variable[i];
            val.__proto__ = locals;
            out += func.call(val, val);
        }

        return out;
    }

    variable.__proto__ = locals;

    if (typeof variable === 'object') {
        return func.call(variable, variable);
    }

    return func.call(locals, locals);
}

