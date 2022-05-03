const { server } = require('./packages/tests/src/msw/server')

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  }),
)

afterEach(() => {
  server.resetHandlers()
  if (global.gc) {
    global.gc()
  }
})

afterAll(() => server.close())
