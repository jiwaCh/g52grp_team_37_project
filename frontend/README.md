# G52GRP Group 37 Frontend
Frontend is built using react 16, redux, and bootstrap-react.

## Installation Guide
Setting up the project should be as simple as installing the correct version on NodeJS and installing dependencies

### Node/NVM
You can fetch node.js from [nodejs.org](https://nodejs.org/en/download/). Our pipelines prefer node.js 12 `lts/dubnium`.

If you're on mac you can install the node version manager (nvm) using homebrew by running `brew install nvm`. You can then install the node 12 by running `nvm install lts/dubnium` and then `nvm use lts/dubnium`.

On Ubuntu and Debian you can install node 12 by executing the following:
```SH
# Using Ubuntu
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt-get install -y nodejs

# Using Debian, as root
$ curl -sL https://deb.nodesource.com/setup_12.x | bash -
$ apt-get install -y nodejs
```

Arch: `$ pacman -S nodejs npm`
FreeBSD: `$ pkg install node`
OpenBSD: `$ pkg_add node`

### Yarn
To prevent lock file issues, you should use yarn to manage dependencies. You can install yarn by running `npm i -g yarn` once node is installed.

### Installing dependencies
`cd` into the frontend directory and run `yarn` this will download all the dependencies in the project. Because of the `yarn.lock` file it should install the same version of the dependencies as everyone else.

### A note on Husky
To ensure that code style is consistent, husky is installed in this repo to prevent you from committing code that fails to comply with our linting rules. You should be able to fix linting errors by running `yarn lint:fix`

Husky will run before every commit is processed.

### Continuous Integration
GitHub Actions will run the test suite, linters, and attempt to compile a production build. If any of those steps fail, GitHub Actions will report the commit as failing CI.

### Starting the dev environment
Once you've got everything installed, run `yarn start` to start the react-scripts dev environment. Details below.

## Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`
Runs elsint and stylelint on the entire project.

### `yarl lint:fix`
Will attempt to fix any linting errors in the whole project.

### `yarn lint:js`
Runs eslint on JavaScript and JSX files

### `yarn lint:js:staged`
Runs eslint on staged JavaScript and JSX files

### `yarn lint:js:fix`
Will attempt to fix any linting errors and warnings in JavaScript and JSX files

### `yarn lint:style`
Runs stylelint on css and scss files.

### `yarn lint:style:staged
Runs stylelint on staged css and scss files.

### `yarn lint:style:fix`
Will attempt to fix and linting erros and warnings in css and scss files.

### `yarn build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
