import { Socket } from 'socket.io'
import { Board } from '../board'

type Player = {
  socket: Socket
  name: string
  color: 'white' | 'black'
}

export type CreateRoomArgs = {
  socket: Socket
  name: string
}

export type JoinRoomArgs = {
  socket: Socket
  name: string
  roomId: string
}

export type MovePieceArgs = {
  socket: Socket
  roomId: string
  data: {
    from: keyof Board['position']
    to: keyof Board['position']
  }
}

class GameState {
  private static instance: GameState
  private roomId: string
  private players: Player[] = []
  private board: Board = new Board()
  private inGame: boolean = false

  private constructor(roomId: string) {
    this.roomId = roomId
  }

  static getInstance(roomId: string): GameState {
    const instance = GameState.instance
      ? GameState.instance
      : new GameState(roomId)
    return instance
  }

  static createAndJoinRoom({ name, socket }: CreateRoomArgs): GameState {
    const roomId = this.getRandomRoomId()
    const gameState = this.getInstance(roomId)
    return gameState.joinRoom({ name, socket, roomId })
  }

  public joinRoom({ socket, name }: JoinRoomArgs): GameState {
    const color = this.players.length === 0 ? 'white' : 'black'
    this.players.push({ socket, name, color })
    socket.join(this.roomId)

    if (this.players.length === 2) {
      this.inGame = true
    }

    // io.to(this.roomId).emit('gamestate-update', this)

    return this
  }

  public movePiece({ from, to }: MovePieceArgs['data']): GameState {
    this.board.moveTo({ from, to })
    // io.to(this.roomId).emit('gamestate-update', this)
    return this
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
}

export { GameState }
