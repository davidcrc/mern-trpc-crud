import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext = ({
  req, res
}: trpcExpress.CreateExpressContextOptions) => ({})

const t = initTRPC.context().create()

export const router = t.router

export const middleware = t.middleware

// funciones accesibles desde fuera
export const publicProcedure = t.procedure
