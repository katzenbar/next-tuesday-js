# NextTuesday.js

A Javascript library for parsing dates using natural language, like "Next
Tuesday".

- [Getting Started](#getting-started)
- [API](#api)
- [Development](#development)
  - [Build Overview](#build-overview)
  - [Available Build Commands](#available-build-commands)

## Getting Started

In progress...

## API

In progress...

## Development

### Build Overview

NextTuesday.js uses [Gulp](http://gulpjs.com/) for its builds and tests. The
default gulp command will start up a watcher to run the build and tests when
any of the source or tests change. A build will always run the JSHint linter to
ensure that there are no glaring errors that will cause the build to fail.

### Available Build Commands

- `gulp` (alias for `gulp default`, `gulp watch`)
  - This will run the watcher to build and test the code as it changes
- `gulp build`
  - This runs the build step by itself once
- `gulp test`
  - This runs the build, and then tests the build once
- `gulp jshint`
  - This runs jshint only, once
