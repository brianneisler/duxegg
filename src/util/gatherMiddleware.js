import { push, reduce } from 'mudash'

const gatherMiddleware = (modules) => reduce(
  modules,
  (sagas, module) => {
    if (module.middleware) {
      return push(sagas, module.middleware)
    }
    return sagas
  },
  []
)

export default gatherMiddleware
