import { compose } from 'mudash'
import { createStore } from 'redux'

const composeStore = (reducer, enhancers) => compose(
  ...enhancers
)(createStore)(reducer)

export default composeStore
