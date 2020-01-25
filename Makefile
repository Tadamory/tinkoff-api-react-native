lint:
	npx eslint .

build:
	npm run build

publish:
	npm publish --dry-run

install:
	sudo npm link

#npm install -g http-server
server:
	http-server -c-1
