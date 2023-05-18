import Fastify from 'fastify'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { handleSocketEvents } from './socket'

export const fastify = Fastify({
  logger: true,
})

const httpServer = createServer(fastify.server)
export const io = new Server(httpServer, {
  cors: {
    origin: '*',
    credentials: true,
  },
})

io.on('connection', (socket) => {
  handleSocketEvents({ socket })
})

httpServer.listen(3333, undefined, () => {
  console.info('🚀 Server running on port 3333')
})
