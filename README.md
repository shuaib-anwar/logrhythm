# README #

### Instructions ###

* XAMPP Setup
* My Sql Setup
* Phalcon Framework [Learn Phalcon](https://docs.phalconphp.com/en/latest/reference/tutorial.html)

### Download Packages ###

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
* Lodash [Here](https://phalconphp.com/en/download/windows)
* D3 Charts
* Karma.
* Open `C:\xampp\php\php.ini`
* And goto Line 900; Add extenion `extension=php_phalcon.dll`
* Detailed Documentaion [Click Here](https://docs.phalconphp.com/en/3.0.2/reference/xampp.html)

#### Contributors ####

* Shuaib Anwar <shueb.anwar@globallogic.com>