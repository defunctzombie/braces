all:

test: compile
	npm test

compile: lib/parser.js

lib/parser.js: src/braces.yy src/braces.l
	./node_modules/.bin/jison -m commonjs $^ -o $@

clean:
	rm lib/parser.js

.PHONY: clean compile test
