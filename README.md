# Web Worker In Angular 4

This is a proof of concept to load web workers insides of an Angular 4 framework. **This is NOT loading Angular inside of a Web Worker**.

When running the app, open your console to see logs. I didn't develop fancy schmancy UI work. I just wanted to load and build the web workers in an Angular project. PR's welcome.

The project loads TWO web workers. One that is simple without dependencies, one with dependencies from node_modules and app internal.

Webpack is used to transpile the Web Workers to `.js`. The Webpack plugin `worker-loader` is used to load the workers into Angular.

The custom `webpack.worker.config.js` transpiles the workers ( this project is not ng ejected ). Note the entry points to how the workers 
are transpile to the same location as their `ts` counterparts.

## Unit Tests

I attempted running unit tests using the web worker API ( load as a web worker ) and running 
in the same context as jasmine to no avail. The most successful ( and useful ) method is importing 
the web worker like any other file. I created a jasmine API and Worker API to accommodate a Worker 
context for production and browser context for tests.

For my own workers, I will be using demo 2 because I like the separation of the processing code from 
the worker and jasmine API. Webpack bundles the worker, so all is good.

## Issues Researched
  - [How to work with web workers (use a web worker IN cli project)](https://github.com/angular/angular-cli/issues/5885)
  - [The need for multiple output paths?](https://github.com/webpack/webpack/issues/1189)
  - [TS2351 'new' doesn't work when .d.ts is installed via typings?](https://github.com/typings/typings/issues/486)
  
## Research
  - [webpack sample](https://github.com/webpack/webpack/tree/master/examples/web-worker)


## Transpile the web workers manually

Run `npm run worker` or `yarn worker`.

## Development server

Run `npm run start` or `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` or `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

I did not implement unit tests on the web workers. PR's welecome.

## PR's

PR's welcome if you find this proof of concept useful and want to enhance.
