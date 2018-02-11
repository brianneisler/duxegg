import { combineReducers } from 'redux'
import composeStore from './composeStore'
import gatherEnhancers from './gatherEnhancers'
import gatherReducers from './gatherReducers'

const buildStore = (modules) =>
  composeStore(
    combineReducers(gatherReducers(modules)),
    gatherEnhancers(modules)
  )

export default buildStore
