'use client'

import { Events } from '@/types/Events'
import { GameState } from '@/types/GameState'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, createContext, useContext, useState } from 'react'
import { io } from 'socket.io-client'

type GameStateContextType = {
  gameState: GameState | null
  emitEvent: (eventName: Events, data: any) => void
}

const GameStateContext = createContext<GameStateContextType>(
  {} as GameStateContextType,
)

export const GameStateContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const socket = io('http://localhost:3333')
  const [gameState, setGameState] = useState<GameState | null>(null)
  const pathname = usePathname()
  const { push } = useRouter()

  const emitEvent = (eventName: Events, data: any) => {
    console.info('(EMIT-EVENT) eventName', data)
    socket.emit(eventName, data)
  }

  socket.on('gamestate-update', (gameState: GameState) => {
    console.info('(EVENT) gamestate-update', gameState, { pathname })
    setGameState({
      ...gameState,
      players: gameState.players.map((players) => ({
        ...players,
        isMe: players.socketId === socket.id,
      })),
    })

    if (gameState && !pathname.includes('game')) {
      push(`/game/${gameState.roomId}`)
    }
  })

  return (
    <GameStateContext.Provider value={{ gameState, emitEvent }}>
      {children}
    </GameStateContext.Provider>
  )
}

export const useGameState = () => {
  const context = useContext(GameStateContext)
  return context
}
