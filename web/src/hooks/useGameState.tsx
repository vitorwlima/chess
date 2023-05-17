'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import { io } from 'socket.io-client'

type GameStateContextType = {
  gameState: any
  emitEvent: (eventName: string, data: any) => void
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
  const [gameState, setGameState] = useState({})

  const emitEvent = (eventName: string, data: any) => {
    console.info('(EMIT-EVENT) eventName', data)
    socket.emit(eventName, data)
  }

  socket.on('gamestate-update', (gameState) => {
    console.info('(EVENT) gamestate-update', gameState)
    setGameState(gameState)
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
