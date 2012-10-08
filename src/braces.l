
%x mu emu

%%
[^\x00]*?/('{{')                 {
                                   if(yytext.slice(-1) !== '\\') this.begin('mu');
                                   if(yytext.slice(-1) === '\\') yytext = yytext.substr(0,yyleng-1), this.begin('emu');
                                   if(yytext) return 'CONTENT';
                                 }
[^\x00]+                         { return 'CONTENT'; }

<emu>[^\x00]{2,}?/('{{'|<<EOF>>) {
                                   if(yytext.slice(-1) !== '\\') this.popState();
                                   if(yytext.slice(-1) === '\\') yytext = yytext.substr(0,yyleng-1);
                                   return 'CONTENT';
                                 }

<mu>\s+                   /* skip whitespace */
<mu>'{{#'                 return 'OPEN_BLOCK';
<mu>'{{/'                 return 'CLOSE_BLOCK';
<mu>'{{^'                 return 'INV_BLOCK';
<mu>"{{!"[\s\S]*?"}}"            { yytext = yytext.substr(3,yyleng-5); this.popState(); return 'COMMENT'; }
<mu>'{{'                  return 'OPEN';
<mu>'}}'                  { this.popState(); return 'CLOSE'; }
<mu>'/}}'                 { this.popState(); return 'SELF_CLOSE'; }
<mu>"="                          { return 'EQUALS'; }
<mu>':'                   return 'COLON';
<mu>'"'("\\"["]|[^"])*'"'        { yytext = yytext.substr(1,yyleng-2).replace(/\\"/g,'"'); return 'STRING'; }
<mu>"'"("\\"[']|[^'])*"'"        { yytext = yytext.substr(1,yyleng-2).replace(/\\"/g,'"'); return 'STRING'; }
<mu>[a-zA-Z0-9_$-]+    { return 'ID'; }

<INITIAL,mu><<EOF>>               return 'EOF';

