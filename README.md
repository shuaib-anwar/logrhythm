# READ ME #

### Download NPM Packages ###

```
npm install
```

### Run on Browser ###
```
npm start
```

### Run Test Case ###
```
npm test
```

## Build System
This uses NPM scripts, Gulp, and Webpack together for its build system.

`Webpack` handles all file-related concerns:
* Transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Transpiling stylesheets and appending them to the DOM
* Refreshing the browser and rebuilding on file changes
* Hot module replacement for transpiled stylesheets
* Bundling the app
* Loading all modules
* Doing all of the above for `*.spec.js` files as well

`Gulp` is the orchestrator:
* Starting and calling Webpack
* Starting a development server

### Library Used ###
* Lodash
* D3 Charts

#### Contributors ####

* Shuaib Anwar <shueb.anwar@globallogic.com>