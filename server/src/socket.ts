import { Socket } from 'socket.io'
import {
  CreateRoomArgs,
  GameState,
  JoinRoomArgs,
  MovePieceArgs,
} from './gameState'

type SocketProps = {
  socket: Socket
}

export const handleSocketEvents = ({ socket }: SocketProps) => {
  console.info('(EVENT) connect', { socketId: socket.id })
  socket.on('create-room', (args: Omit<CreateRoomArgs, 'socket'>) => {
    console.info('(EVENT) create-room', { args })
    GameState.createAndJoinRoom({ ...args, socket })
  })

  socket.on('join-room', (args: Omit<JoinRoomArgs, 'socket'>) => {
    console.info('(EVENT) join-room', { args })
    const gameState = GameState.getInstance(args.roomId)
    gameState.joinRoom({ ...args, socket })
  })

  socket.on('move-piece', (args: MovePieceArgs) => {
    console.info('(EVENT) move-piece', { args })
    const gameState = GameState.getInstance(args.roomId)
    gameState.movePiece(args.data)
  })
}
