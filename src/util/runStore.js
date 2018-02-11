import { forEachObjIndexed, is } from 'ramda'

const runStore = (store) => {
  const modules = store.getModules()
  forEachObjIndexed(
    (module) => {
      const { run } = module
      if (is(Function, run)) {
        run(modules)
      }
    },
    modules
  )
  return store
}

export default runStore
