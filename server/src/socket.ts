import { Server, Socket } from 'socket.io'
import {
  CreateRoomArgs,
  GameState,
  JoinRoomArgs,
  MovePieceArgs,
} from './gameState'

type SocketProps = {
  socket: Socket
  io: Server
}

export const handleSocketEvents = ({ socket, io }: SocketProps) => {
  console.info('(EVENT) connect', { socketId: socket.id })
  socket.on('create-room', (args: Omit<CreateRoomArgs, 'socket'>) => {
    console.info('(EVENT) create-room', { args })
    GameState.createAndJoinRoom({ ...args, socket, io })
  })

  socket.on('join-room', (args: Omit<JoinRoomArgs, 'socket'>) => {
    console.info('(EVENT) join-room', { args })
    const gameState = GameState.getInstance(args.roomId, io)
    gameState.joinRoom({ ...args, socket })
  })

  socket.on('move-piece', (args: MovePieceArgs) => {
    console.info('(EVENT) move-piece', { args })
    const gameState = GameState.getInstance(args.roomId, io)
    gameState.movePiece(args.data)
  })
}
