import buildStore from './util/buildStore'
import runStore from './util/runStore'

const createStore = (modules) => {
  const store = buildStore(modules)
  runStore(store)
  const getModules = () => modules
  return {
    ...store,
    getModules
  }
}

export default createStore
