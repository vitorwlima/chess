'use client'

import { ChessBoard } from '@/components/ChessBoard'
import { Lobby } from '@/components/Lobby'
import { useGameState } from '@/hooks/useGameState'

const Game = () => {
  const { gameState } = useGameState()
  const gameHasStarted = gameState?.inGame

  return gameHasStarted ? <ChessBoard /> : <Lobby />
}

export default Game
