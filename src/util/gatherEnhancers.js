import { applyMiddleware } from 'redux'
import gatherMiddleware from './gatherMiddleware'

const gatherEnhancers = (modules) => [
  applyMiddleware(...gatherMiddleware(modules))
]

export default gatherEnhancers
