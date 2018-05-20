import buildModules from './buildModules'

test('buildModules correctly combines modules', () => {
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
    },
    baz: {
      module: {
        prop: 'baz'
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
    },
    baz: {
      prop: 'baz'
    }
  })
})
