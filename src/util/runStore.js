import { forEachObjIndexed, is } from 'ramda'

const runStore = (store) => {
  forEachObjIndexed(
    (module) => {
      const { run } = module
      if (is(Function, run)) {
        run(store)
      }
    },
    store.getModules()
  )
  return store
}

export default runStore
