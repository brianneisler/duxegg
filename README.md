# duxegg

Simple module concept for redux


## Benefits
- Simple module concept for abstracting redux dependencies from one another
- Modules are easy to compose together
- Simple hook system for tapping in to redux lifecycle
- Provides a framework for building out an entire application (if desired)


## Build Status

[![npm version](https://badge.fury.io/js/duxegg.svg)](https://badge.fury.io/js/duxegg)<br />
[![Build Status](https://travis-ci.org/brianneisler/duxegg.svg)](https://travis-ci.org/brianneisler/duxegg)<br />
[![NPM](https://nodei.co/npm/duxegg.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/duxegg/)


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

const config = {
  foo: { // config passed to module is based on name of module
    key: 'value'
  }
}

const App = () =>
  <Provider store={createStore(modules, config)}>
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

const module = (config) => {
  const middleware = createSagaMiddleware()

  const reducer = handleActions({
    ...
  })

  const saga = function* saga() {
    ...
  }

  return {
    middleware,
    reducer,
    saga
  }
}

export default module
```
