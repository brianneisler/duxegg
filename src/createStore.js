import buildModules from './util/buildModules'
import buildStore from './util/buildStore'
import runStore from './util/runStore'

const createStore = (modules, config) => {
  const builtModules = buildModules(modules, config)
  const store = buildStore(builtModules)
  const getModules = () => builtModules
  const getConfig = () => config

  return runStore({
    ...store,
    getConfig,
    getModules
  })
}

export default createStore
