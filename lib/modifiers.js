// builtin modifiers

function escape_html(value) {
    return value.replace(/[&<>"']/g, function(char) {
        switch (char) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '"': return '&quot;';
        case "'": return '&#x27;';
        }
    });
}
module.exports.escape_html = escape_html;

