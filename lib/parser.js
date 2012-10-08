/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"statements":6,"statement":7,"tag":8,"block":9,"CONTENT":10,"COMMENT":11,"selfblock":12,"openBlock":13,"closeBlock":14,"OPEN_BLOCK":15,"path":16,"args":17,"SELF_CLOSE":18,"CLOSE":19,"CLOSE_BLOCK":20,"OPEN":21,"mods":22,"arg":23,"mod":24,"COLON":25,"ID":26,"STRING":27,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",10:"CONTENT",11:"COMMENT",15:"OPEN_BLOCK",18:"SELF_CLOSE",19:"CLOSE",20:"CLOSE_BLOCK",21:"OPEN",25:"COLON",26:"ID",27:"STRING"},
productions_: [0,[3,2],[4,1],[4,0],[6,1],[6,2],[7,1],[7,1],[7,1],[7,1],[9,1],[9,3],[12,4],[12,3],[13,4],[13,3],[14,3],[8,5],[8,4],[8,3],[17,2],[17,1],[22,2],[22,1],[24,2],[23,1],[23,1],[16,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = $$[$0] 
break;
case 3: this.$ = []; 
break;
case 4: this.$ = [$$[$0]]; 
break;
case 5: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 6: this.$ = $$[$0]; 
break;
case 7: this.$ = $$[$0]; 
break;
case 8: this.$ = $$[$0] 
break;
case 9: this.$ = null 
break;
case 10: this.$ = { type: 'block', open: $$[$0], self: true } 
break;
case 11: this.$ = { type: 'block', open: $$[$0-2], content: $$[$0-1], close: $$[$0] } 
break;
case 12: this.$ = { path: $$[$0-2], args: $$[$0-1] } 
break;
case 13: this.$ = { path: $$[$0-1] } 
break;
case 14: this.$ = { path: $$[$0-2], args: $$[$0-1] } 
break;
case 15: this.$ = { path: $$[$0-1] } 
break;
case 16: this.$ = { path: $$[$0-1] } 
break;
case 17: this.$ = { path: $$[$0-3], args: $$[$0-1], mods: $$[$0-2] } 
break;
case 18: this.$ = { path: $$[$0-2], mods: $$[$0-1] } 
break;
case 19: this.$ = { path: $$[$0-1] } 
break;
case 20: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 21: this.$ = [$$[$0]]; 
break;
case 22: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 23: this.$ = [$$[$0]]; 
break;
case 24: this.$ = $$[$0] 
break;
case 25: this.$ = 'local.' + $$[$0] 
break;
case 26: this.$ = '\'' + $$[$0] + '\'' 
break;
case 27: this.$ = $$[$0] 
break;
}
},
table: [{3:1,4:2,5:[2,3],6:3,7:4,8:5,9:6,10:[1,7],11:[1,8],12:10,13:11,15:[1,12],21:[1,9]},{1:[3]},{5:[1,13]},{5:[2,2],7:14,8:5,9:6,10:[1,7],11:[1,8],12:10,13:11,15:[1,12],20:[2,2],21:[1,9]},{5:[2,4],10:[2,4],11:[2,4],15:[2,4],20:[2,4],21:[2,4]},{5:[2,6],10:[2,6],11:[2,6],15:[2,6],20:[2,6],21:[2,6]},{5:[2,7],10:[2,7],11:[2,7],15:[2,7],20:[2,7],21:[2,7]},{5:[2,8],10:[2,8],11:[2,8],15:[2,8],20:[2,8],21:[2,8]},{5:[2,9],10:[2,9],11:[2,9],15:[2,9],20:[2,9],21:[2,9]},{16:15,26:[1,16]},{5:[2,10],10:[2,10],11:[2,10],15:[2,10],20:[2,10],21:[2,10]},{4:17,6:3,7:4,8:5,9:6,10:[1,7],11:[1,8],12:10,13:11,15:[1,12],20:[2,3],21:[1,9]},{16:18,26:[1,16]},{1:[2,1]},{5:[2,5],10:[2,5],11:[2,5],15:[2,5],20:[2,5],21:[2,5]},{19:[1,20],22:19,24:21,25:[1,22]},{18:[2,27],19:[2,27],25:[2,27],26:[2,27],27:[2,27]},{14:23,20:[1,24]},{17:25,18:[1,26],19:[1,27],23:28,26:[1,29],27:[1,30]},{17:31,19:[1,32],23:28,24:33,25:[1,22],26:[1,29],27:[1,30]},{5:[2,19],10:[2,19],11:[2,19],15:[2,19],20:[2,19],21:[2,19]},{19:[2,23],25:[2,23],26:[2,23],27:[2,23]},{26:[1,34]},{5:[2,11],10:[2,11],11:[2,11],15:[2,11],20:[2,11],21:[2,11]},{16:35,26:[1,16]},{18:[1,36],19:[1,37],23:38,26:[1,29],27:[1,30]},{5:[2,13],10:[2,13],11:[2,13],15:[2,13],20:[2,13],21:[2,13]},{10:[2,15],11:[2,15],15:[2,15],20:[2,15],21:[2,15]},{18:[2,21],19:[2,21],26:[2,21],27:[2,21]},{18:[2,25],19:[2,25],26:[2,25],27:[2,25]},{18:[2,26],19:[2,26],26:[2,26],27:[2,26]},{19:[1,39],23:38,26:[1,29],27:[1,30]},{5:[2,18],10:[2,18],11:[2,18],15:[2,18],20:[2,18],21:[2,18]},{19:[2,22],25:[2,22],26:[2,22],27:[2,22]},{19:[2,24],25:[2,24],26:[2,24],27:[2,24]},{19:[1,40]},{5:[2,12],10:[2,12],11:[2,12],15:[2,12],20:[2,12],21:[2,12]},{10:[2,14],11:[2,14],15:[2,14],20:[2,14],21:[2,14]},{18:[2,20],19:[2,20],26:[2,20],27:[2,20]},{5:[2,17],10:[2,17],11:[2,17],15:[2,17],20:[2,17],21:[2,17]},{5:[2,16],10:[2,16],11:[2,16],15:[2,16],20:[2,16],21:[2,16]}],
defaultActions: {13:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:
                                   if(yy_.yytext.slice(-1) !== '\\') this.begin('mu');
                                   if(yy_.yytext.slice(-1) === '\\') yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1), this.begin('emu');
                                   if(yy_.yytext) return 10;
                                 
break;
case 1: return 10; 
break;
case 2:
                                   if(yy_.yytext.slice(-1) !== '\\') this.popState();
                                   if(yy_.yytext.slice(-1) === '\\') yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1);
                                   return 10;
                                 
break;
case 3:/* skip whitespace */
break;
case 4:return 15;
break;
case 5:return 20;
break;
case 6:return 'INV_BLOCK';
break;
case 7: yy_.yytext = yy_.yytext.substr(3,yy_.yyleng-5); this.popState(); return 11; 
break;
case 8:return 21;
break;
case 9: this.popState(); return 19; 
break;
case 10: this.popState(); return 18; 
break;
case 11: return 'EQUALS'; 
break;
case 12:return 25;
break;
case 13: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 27; 
break;
case 14: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 27; 
break;
case 15: return 26; 
break;
case 16:return 5;
break;
}
};
lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:\s+)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:\}\})/,/^(?:\/\}\})/,/^(?:=)/,/^(?::)/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:[a-zA-Z0-9_$-]+)/,/^(?:$)/];
lexer.conditions = {"mu":{"rules":[3,4,5,6,7,8,9,10,11,12,13,14,15,16],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"INITIAL":{"rules":[0,1,16],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}