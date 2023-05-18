import { Server, Socket } from 'socket.io'
import { Board } from '../board'

type Player = {
  socketId: string
  name: string
  color: 'white' | 'black'
}

export type CreateRoomArgs = {
  socket: Socket
  name: string
  io: Server
}

export type JoinRoomArgs = {
  socket: Socket
  name: string
  roomId: string
}

export type MovePieceArgs = {
  roomId: string
  data: {
    from: keyof Board['position']
    to: keyof Board['position']
  }
}

class GameState {
  private static instances: Map<string, GameState> = new Map()
  private roomId: string
  private players: Player[] = []
  private board: Board = new Board()
  private inGame: boolean = false
  private io: Server

  private constructor(roomId: string, io: Server) {
    this.roomId = roomId
    this.io = io
  }

  static getInstance(roomId: string, io: Server): GameState {
    const instanceAlreadyExists = GameState.instances.has(roomId)
    const instance = instanceAlreadyExists
      ? GameState.instances.get(roomId)!
      : new GameState(roomId, io)

    const newInstances = instanceAlreadyExists
      ? GameState.instances
      : GameState.instances.set(roomId, instance)
    this.instances = newInstances

    console.info(
      'GameState instances (roomIds): ',
      Array.from(newInstances.keys()),
    )

    return instance
  }

  static createAndJoinRoom({ name, socket, io }: CreateRoomArgs): GameState {
    const roomId = this.getRandomRoomId()
    const gameState = this.getInstance(roomId, io)
    return gameState.joinRoom({ name, socket, roomId })
  }

  public joinRoom({ socket, name }: JoinRoomArgs): GameState {
    const color = this.players.length === 0 ? 'white' : 'black'
    this.players.push({ socketId: socket.id, name, color })
    socket.join(this.roomId)

    if (this.players.length === 2) {
      this.inGame = true
    }

    return this.updateGameState(this)
  }

  public movePiece({ from, to }: MovePieceArgs['data']): GameState {
    this.board.moveTo({ from, to })
    return this.updateGameState(this)
  }

  private static getRandomRoomId(): string {
    const length = 6
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let result = ''
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)]

    // const roomExists = !!io.sockets.adapter.rooms.get(result)

    // if (roomExists) {
    //   return this.getRandomRoomId()
    // }

    return result
  }

  private updateGameState(gameState: GameState) {
    const { players, board, inGame, roomId } = gameState
    const gameStateToSend = {
      players,
      board,
      inGame,
      roomId,
    }

    this.io.to(this.roomId).emit('gamestate-update', gameStateToSend)
    return gameState
  }
}

export { GameState }
