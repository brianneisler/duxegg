import buildStore from './util/buildStore'
import runStore from './util/runStore'

const createStore = (modules) => {
  const store = buildStore(modules)
  const getModules = () => modules
  return runStore({
    ...store,
    getModules
  })
}

export default createStore
