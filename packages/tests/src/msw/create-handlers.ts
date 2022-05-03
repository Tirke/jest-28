import { rest } from 'msw'

import { server } from './server'

type MswMethods = keyof typeof rest
type CreateMswHandler = {
  method: MswMethods
  url: string
  statusCode: number
  data?: unknown
}

export const createMswHandler = ({
  method = 'get',
  url,
  statusCode = 200,
  data = 'true',
}: CreateMswHandler) => {
  return server.use(
    rest[method](url, (req, res, ctx) =>
      res(ctx.status(statusCode), ctx.json(data)),
    ),
  )
}
