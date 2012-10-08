# braces

braces is a lightweight templating language inspired by features from mustache and ctemplates

## server

```javascript
var braces = require('braces');

// to compile a template
var template = braces.compile('{{foo}}');

// render the template
var rendered = template.render({
    foo: 'bar'
});

console.log(rendered);
```

## browser

If you want to send the template for client side usage, just call `toString` on the template.

```javascript
res.send(template.toString());
```

## examples

Below are example templates and what the resulting output produces

### print a variable

To print a variable from the current scope, just enclose it in braces. It will be escaped automatically for html characters.

```
{{foo}}
```

### modifiers

You can modify the output of any variable using the modifier syntax. Modifiers are evaluated left to right.

```
{{foo:mod1:mod2}}
```

`mod1` and `mod2` are functions which take the left side value and output the newly modified value.

```javascript
braces.modifier('mod1', function(val) {
    return val.toUpperCase();
});
```

### conditionally printing

Using a variable as a block expression allows for conditional printing. If the variable has a value then the content between the blocks will rendered.

```
{{#foo}}Something: {{foo}}{{/foo}}
```

### lists

Any variable used as a block will cause the block to be automatically expanded. Below, if `people` is an array of objects, the block will be rendered for each object.

```
{{#people}}{{name}} - {{age}}{{/people}}
```

### blocks

Similar to functions but have a body. In addition to the arguments passed, an additional argument is passed which is the block context. Invoke this like a function to render the internal context.

```
{{#custom_block 'argument'}}
    Something - {{name}}
{{/custom_block}}
```

```javascript
braces.regiser('custom_block', function(arg, context) {
    // render the internal context
    return context({ name: 'foo' });
});
```

### functions

You can create custom functions/helpers and invoke them using self closing block syntax. Any arguments specified will be passed to the function. Functions are actually just blocks with no context.

```
{{#custom people 'something' /}}
```

```javascript
braces.register('custom', function(who, arg) {
    // who will be set to the people variable
    // arg will be 'something'

    // anything returned will be rendered in place of the function call
    return 'render this';
});
```

### blank environment

If you want to maintain separate environments for helpers and modifiers.

```javascript
var env = require('braces').new();

// env.compile(source);
```

## credits

Thanks to the following projects for ideas, inspiration, and tests

* mu
* handlebars
* ctemplates


