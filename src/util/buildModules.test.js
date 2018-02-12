import buildModules from './buildModules'

test('adds 1 + 2 to equal 3', () => {
  const modules = {
    foo: {
      module: (config) => {
        expect(config).toBe('abc')
        return {
          prop: 'foo'
        }
      }
    },
    bar: {
      module: (config) => {
        expect(config).toBe(undefined)
        return {
          prop: 'bar'
        }
      }
    }
  }
  const config = {
    foo: 'abc'
  }
  expect(buildModules(modules, config)).toEqual({
    foo: {
      prop: 'foo'
    },
    bar: {
      prop: 'bar'
    }
  })
})
