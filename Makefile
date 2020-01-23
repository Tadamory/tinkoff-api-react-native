lint:
	npx eslint .

build:
	npm run build
make 
publish:
	npm publish --dry-run

install:
	sudo npm link