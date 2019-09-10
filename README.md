# Browser and Node module boilerplate for TypeScript with Webpack

Write modules in TypeScript or JavaScript and build with Webpack and Typescript Compiler. 

Development with Webpack Dev Server. 


## Why?

* A simple setup for webpack, with multiple configs for different environments (dev, prod, example, test) 
* Separated configs for easy understanding (js build tools are complex)
* Ability to separate JS files and load them async (large projects need async loading of JS) . Work in progress. 


## Notable Features

### Development

* Simple setup, runs out of the box
* Hot (HMR) Development for quick loading CSS and JS modules

### Production

* Multiple JS file output for separation of modules (dynamic imports etc.)
* Sample webpack configs in `./webpack` for different environments
* Extract CSS to external css files in builds

## Getting started

### Use Git

```bash
git clone git@github.com:Seedess/typescript-browser-node-module-boilerplate.git
```

## How to develop or build a module?

* development

    ```bash
    npm run watch
    ```

* production

    ```bash
    npm run build
    ```

* example

    ```bash
    npm run watch:example
    ```

## Remove generated directory

If you would like to remove `public/dist` directory (created by Webpack):

```bash
npm run clear
```

If you would like to remove `node_modules/` and remove `public/dist/`

```bash
npm run clear:all
```

## Count LOC (Lines of Code)

If you would like to know how many lines of code you write:

```bash
npm run count
```

## Analysis of bundle file weight

If you would like to check how much a bundle file weight:

```bash
npm run build
npm run audit
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019

&copy; [Seedess](https://seedess.com) - [The MIT License](https://seedess.mit-license.org/) @ 2019
