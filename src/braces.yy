%start root

%%

root
  : program EOF { return $1; }
  ;

program
  : statements { $$ = $1 }
  | "" { $$ = []; }
  ;

statements
  : statement { $$ = [$1]; }
  | statements statement { $1.push($2); $$ = $1; }
  ;

statement
  : tag { $$ = $1; }
  | block { $$ = $1; }
  | CONTENT { $$ = $1 }
  | COMMENT { $$ = null }
  ;

block
  : selfblock { $$ = { type: 'block', open: $1, self: true } }
  | openBlock program closeBlock { $$ = { type: 'block', open: $1, content: $2, close: $3 } }
  ;

selfblock
  : OPEN_BLOCK path args SELF_CLOSE { $$ = { path: $2, args: $3 } }
  | OPEN_BLOCK path SELF_CLOSE { $$ = { path: $2 } }
  ;

openBlock
  : OPEN_BLOCK path args CLOSE { $$ = { path: $2, args: $3 } }
  | OPEN_BLOCK path CLOSE { $$ = { path: $2 } }
  ;

closeBlock
  : CLOSE_BLOCK path CLOSE { $$ = { path: $2 } }
  ;

tag
  : OPEN path mods args CLOSE { $$ = { path: $2, args: $4, mods: $3 } }
  | OPEN path mods CLOSE { $$ = { path: $2, mods: $3 } }
  | OPEN path CLOSE { $$ = { path: $2 } }
  ;

args
  : args arg { $1.push($2); $$ = $1; }
  | arg { $$ = [$1]; }
  ;

mods
  : mods mod { $1.push($2); $$ = $1; }
  | mod { $$ = [$1]; }
  ;

mod
  : COLON ID { $$ = $2 }
  ;

arg
  : ID { $$ = 'local.' + $1 }
  | STRING { $$ = '\'' + $1 + '\'' }
  ;

path
  : ID { $$ = $1 }
  ;

