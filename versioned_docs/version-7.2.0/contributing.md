# Contributing

### :bug: [How to report a bug](http://polite.technology/reportabug.html)

## Please note

The high-level structure of Turf is undergoing discussion at [#1428](https://github.com/Turfjs/turf/issues/1428). Currently (June 2018), there is a partial conversion to Typescript, and the contribution documentation does not completely reflect the current status.

## How To Contribute

- Most work happens in sub modules. These are found in the `packages` directory prefixed with "turf-".
- If you would like to propose a new feature, open an issue in Turfjs/turf.
- Always include tests. We use [tape](https://github.com/substack/tape).
- Turf modules are small, containing a single exported function.
- GeoJSON is the lingua franca of Turf. It should be used as the data structure for anything that can be represented as geography.
- Avoid large dependencies at all costs.
- Turf is used in a wide range of places. Make sure that your code can run in the browser (ie: don't make calls to external services, don't hit the filesystem, etc.).
- The `README.md` files in `packages/turf-<module>` are automatically generated from the [JSDocs](https://jsdoc.app) of the `index.js`. Please modify the JSDocs instead of modifying the `README.md` files directly. Then update/create the `README.md` executing [`./scripts/generate-readmes`](https://github.com/Turfjs/turf/blob/master/scripts/generate-readmes) or runing `npm run docs` from the root TurfJS directory.
- Finally run `npm test` from the project root folder to run all the tests required for deploying the project.

## Code Style

To ensure code style, at the `turf` root level run

```sh
$ npm run lint
```

- Follow the [AirBNB JavaScript code style](https://github.com/airbnb/javascript).
- Turf aims to use ES5 features where rational. We do not use ES6 features.

## Structure of a turf module

```
turf-<MODULE NAME>
│   index.js
│   index.d.ts
│   bench.js
│   test.js
│   types.ts
│   package.json
│   README.md
│   LICENSE
│
└───test
    │
    ├───in
    │   points.geojson
    │
    └───out
        points.geojson
```

To get started with a new module navigate to the root directory and run

```sh
$ node ./scripts/create-new-module <MODULE NAME>
```

it will create a new folder inside `packages` with a simple boilerplate for your module.

- `index.js` - This file contains, in order, the various modules you need to
  import, the [JSDocs](https://jsdoc.app) documentation, and, finally, the
  single exported function that the module provides. For more on the types
  supported in the documentation, see…
- `index.d.ts` - This is a [TypeScript](https://www.typescriptlang.org/) file
  that describes your function’s signature. For more on the types supported in
  TypeScript, see…
- `bench.js` - This file uses [Benchmark](https://benchmarkjs.com/) to time
  your function.
- `test.js` - This file includes your [tape](https://github.com/substack/tape)
  tests. We prefer dynamic testing built from GeoJSON files placed in
  `./test/in` that are subsequently written to `./test/out` if your `REGEN`
  [environment variable is set](https://askubuntu.com/a/58828) to `true`. If
  `REGEN` is set to a different value, then running `npm t` will compare the
  output of the tests to the files already present in `./test/out`.
- `types.ts` - A file that lists the custom TypeScript types used in
  `index.d.ts`.
- `package.json` - The [node](http://nodejs.org) metadata container file.
  Modules imported in `index.js` should be listed here under `dependencies`,
  and modules used in `test.js` and/or `bench.js` should be listed under
  `devDependencies`. `npm install` looks to this file to install dependencies
  in `./node_modules`.
- `README.md` - This README is generated _automatically_ by running `npm run
docs` from the project root level. **DO NOT edit this file**.
- `LICENCE` - Like the README, this file should not be edited.
- `test/` - This directory holds the GeoJSON files that provide data for
  dynamic tests (in `./test/in`) and the results of the tests (in
  `./test/out`). The files in `./test/out` should **not** be edited by hand.
  They should be generated dynamically by [setting the environment
  variable](https://askubuntu.com/a/58828) `REGEN` to `true`, and then the
  tests should be checked against these files by setting `REGEN` to some other
  value. The resulting out-files can be drag-dropped into
  [geojson.io](http://geojson.io) to see, visually, if the module is behaving
  appropriately.

## Publishing

Install lerna:

```bash
$ npm install -g lerna@2.0.0-beta.34
```

Publish a test release:

```bash
$ lerna publish --canary
```

## Documentation

To update TurfJS's Documentation (README.md) use the following `npm run docs`:

- **inside a module:** will only generate the docs of that module.
- **main folder:** will generate docs for all modules.

### Examples

**Only builds docs for `@turf/center`**

```bash
$ cd ./turf/packages/turf-center
$ npm run docs

> @turf/center@5.0.4 docs /Users/mac/Github/turf/packages/turf-center
> node ../../scripts/generate-readmes

Building Docs: @turf/center
```

**Builds docs for all modules**

```bash
$ cd ./turf
$ npm run docs
> @5.0.0 docs /Users/mac/Github/turf
> node ./scripts/generate-readmes

Building Docs: @turf/along
Building Docs: @turf/area
Building Docs: @turf/bbox-clip
Building Docs: @turf/bbox-polygon
Building Docs: @turf/bbox
Building Docs: @turf/bearing
Building Docs: @turf/bezier-spline
Building Docs: @turf/boolean-clockwise
....
```

## Other Dependencies

- Turf uses [Yarn](https://yarnpkg.com) and [lerna](https://lerna.js.org) during the testing, packaging and publishing process.
  - Lerna will be automatically installed when you run `npm install` in the root directory.
  - Yarn will need to be installed on your computer, installers are available via the yarn website.

## Financial contributions

We also welcome financial contributions in full transparency on our [open collective](https://opencollective.com/turf).
Anyone can file an expense. If the expense makes sense for the development of the community, it will be "merged" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.