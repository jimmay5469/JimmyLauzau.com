test:
	@./node_modules/.bin/mocha -R spec --recursive

test-w:
	@./node_modules/.bin/mocha -w -R min --recursive

.PHONY: test test-w