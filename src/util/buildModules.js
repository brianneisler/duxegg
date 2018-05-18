import { has, is, mapObjIndexed, prop } from 'ramda'

const buildModules = (modules, config) => mapObjIndexed((mod, name) => {
  if (!has('module', mod)) {
    throw new Error(`module ${name} missing module property`)
  }
  const modBuilder = prop('module', mod)
  if (is(Function, modBuilder)) {
    return modBuilder(prop(name, config))
  }
  return mod
}, modules)

export default buildModules
