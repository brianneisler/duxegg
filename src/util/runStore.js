import { each, isFunction } from 'mudash'

const runStore = (modules) => each(
  modules,
  (module, name) => {
    const { run } = module
    if (isFunction(run)) {
      run(module, name, modules)
    }
  }
)

export default runStore
