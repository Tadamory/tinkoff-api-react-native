lint:
	npx eslint .

build:
	npm run pack

#publish:
	#npm publish --dry-run

install:
	sudo npm link

#npm install -g http-server
server:
	http-server
