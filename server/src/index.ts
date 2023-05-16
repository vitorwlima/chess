import Fastify from 'fastify'
import { createServer } from 'http'
import { Server } from 'socket.io'
import {
  CreateRoomArgs,
  GameState,
  JoinRoomArgs,
  MovePieceArgs,
} from './gameState'

export const fastify = Fastify({
  logger: true,
})

const httpServer = createServer(fastify.server)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    credentials: true,
  },
})

io.on('connection', (socket) => {
  console.log('conectou!', socket.id)
  socket.on('create-room', (args: CreateRoomArgs) => {
    console.log('(EVENT) create-room', { args })
    GameState.createAndJoinRoom({ ...args, socket })
  })

  socket.on('join-room', (args: JoinRoomArgs) => {
    console.log('(EVENT) join-room', { args })
    const gameState = GameState.getInstance(args.roomId)
    gameState.joinRoom(args)
  })

  socket.on('move-piece', (args: MovePieceArgs) => {
    console.log('(EVENT) move-piece', { args })
    const gameState = GameState.getInstance(args.roomId)
    gameState.movePiece(args.data)
  })
})

httpServer.listen(3333, undefined, () => {
  console.log('server running')
})
