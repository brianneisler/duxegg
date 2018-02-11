import { has, is, mapObjIndexed, prop } from 'ramda'

const buildModules = (modules, config) => mapObjIndexed((module, name) => {
  if (!has('module', module)) {
    throw new Error(`module ${name} missing module property`)
  }
  const mod = prop('module', module)
  if (is(Function, mod)) {
    return mod(prop(name, config))
  }
  return mod
}, modules)

export default buildModules
