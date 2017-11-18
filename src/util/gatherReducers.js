import { reduce, set } from 'mudash'

const gatherReducers = (modules) => reduce(
  modules,
  (reducers, module, key) => {
    if (module.reducer) {
      return set(reducers, key, module.reducer)
    }
    return reducers
  },
  {}
)

export default gatherReducers
