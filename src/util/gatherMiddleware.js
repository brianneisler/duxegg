import { push, reduce } from 'mudash'

const gatherMiddleware = (modules) => reduce(
  modules,
  (sagas, module) => {
    if (module.saga) {
      return push(sagas, module.saga)
    }
    return sagas
  },
  []
)

export default gatherMiddleware
