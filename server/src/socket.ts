import { Socket } from 'socket.io'
import { Events } from './events'
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
  socket.on(Events.CREATE_ROOM, (args: Omit<CreateRoomArgs, 'socket'>) => {
    console.info(`(EVENT) ${Events.CREATE_ROOM}`, { args })
    GameState.createAndJoinRoom({ ...args, socket })
  })

  socket.on(Events.JOIN_ROOM, (args: Omit<JoinRoomArgs, 'socket'>) => {
    console.info(`(EVENT) ${Events.JOIN_ROOM}`, { args })
    const gameState = GameState.getInstance(args.roomId)
    gameState.joinRoom({ ...args, socket })
  })

  socket.on(Events.SWITCH_COLORS, (args: { roomId: string }) => {
    console.info(`(EVENT) ${Events.SWITCH_COLORS}`, { args })
    const gameState = GameState.getInstance(args.roomId)
    gameState.switchColors()
  })

  socket.on(Events.START_GAME, (args: { roomId: string }) => {
    console.info(`(EVENT) ${Events.START_GAME}`, { args })
    const gameState = GameState.getInstance(args.roomId)
    gameState.startGame()
  })

  socket.on(Events.MOVE_PIECE, (args: MovePieceArgs) => {
    console.info(`(EVENT) ${Events.MOVE_PIECE}`, { args })
    const gameState = GameState.getInstance(args.roomId)
    gameState.movePiece(args)
  })
}
