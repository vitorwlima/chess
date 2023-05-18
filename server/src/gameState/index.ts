import { Socket } from 'socket.io'
import { io } from '..'
import { Board } from '../board'

type Player = {
  socketId: string
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
  roomId: string
  playerSocketId: string
  from: keyof Board['position']
  to: keyof Board['position']
}

class GameState {
  private static instances: Map<string, GameState> = new Map()
  private roomId: string
  private players: Player[] = []
  private board: Board = new Board()
  private inGame: boolean = false

  private constructor(roomId: string) {
    this.roomId = roomId
  }

  static getInstance(roomId: string): GameState {
    const instanceAlreadyExists = GameState.instances.has(roomId)
    const instance = instanceAlreadyExists
      ? GameState.instances.get(roomId)!
      : new GameState(roomId)

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

  static createAndJoinRoom({ name, socket }: CreateRoomArgs): GameState {
    const roomId = this.getRandomRoomId()
    const gameState = this.getInstance(roomId)
    return gameState.joinRoom({ name, socket, roomId })
  }

  public joinRoom({ socket, name }: JoinRoomArgs): GameState {
    const color = this.players.length === 0 ? 'white' : 'black'
    this.players.push({ socketId: socket.id, name, color })
    socket.join(this.roomId)

    return this.updateGameState(this)
  }

  public switchColors(): GameState {
    this.players = this.players.map((player) => ({
      ...player,
      color: player.color === 'white' ? 'black' : 'white',
    }))

    return this.updateGameState(this)
  }

  public startGame(): GameState {
    this.inGame = true
    return this.updateGameState(this)
  }

  public movePiece({ from, to, playerSocketId }: MovePieceArgs): GameState {
    const isPlayersTurnAndColor =
      this.players.find((player) => player.socketId === playerSocketId)
        ?.color === this.board.turn

    if (!isPlayersTurnAndColor) {
      return this.updateGameState(this)
    }

    this.board.moveTo({ from, to })
    return this.updateGameState(this)
  }

  private static getRandomRoomId(): string {
    const length = 6
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let result = ''
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)]

    const roomExists = io.sockets.adapter.rooms.has(result)

    if (roomExists) {
      return this.getRandomRoomId()
    }

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

    io.to(this.roomId).emit('gamestate-update', gameStateToSend)
    return gameState
  }
}

export { GameState }
