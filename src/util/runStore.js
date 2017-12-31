import { forEachObjIndexed, is } from 'ramda'

const runStore = (store) => {
  const modules = store.getModules()
  forEachObjIndexed(
    (module, name) => {
      const { run } = module
      if (is(Function, run)) {
        run(module, name, modules)
      }
    },
    modules
  )
  return store
}

export default runStore
