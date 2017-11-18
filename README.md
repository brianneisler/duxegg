# duxegg

Simple module concept for redux


## Benefits
- Simple module concept for abstracting redux dependencies from one another
- Modules are easy to compose together
- Simple hook system for tapping in to redux lifecycle
- Provides a framework for building out an entire application (if desired)


## Build Status

[![npm version](https://badge.fury.io/js/duxtape.svg)](https://badge.fury.io/js/duxtape)<br />
[![Build Status](https://travis-ci.org/brianneisler/duxtape.svg)](https://travis-ci.org/brianneisler/duxtape)<br />
[![NPM](https://nodei.co/npm/duxtape.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/duxtape/)


## Install

```bash
npm install --save duxegg
```


## Usage

```js
// app.js
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'duxegg'
import * as modules from './modules'

const App = () =>
  <Provider store={createStore(modules)}>
    ...
  </Provider>

export default App
```

```js
// modules/index.js
import * from 'foo'
export {
  foo
}
```

```js
// modules/foo/index.js
import { handleActions } from 'redux-actions'
import createSagaMiddleware from 'redux-saga'

const middleware = createSagaMiddleware()

const reducer = handleActions({
  ...
})

const saga = function* saga() {
  ...
}

export {
  middleware,
  reducer,
  saga
}
```
