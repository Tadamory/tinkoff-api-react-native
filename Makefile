lint:
	npx eslint .

build:
	npm run build

publish:
	npm publish --dry-run

install:
	sudo npm link