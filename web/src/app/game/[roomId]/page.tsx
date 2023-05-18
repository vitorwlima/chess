'use client'

import { Lobby } from '@/components/Lobby'
import { useGameState } from '@/hooks/useGameState'

const Game = () => {
  const { gameState } = useGameState()
  const gameHasStarted = gameState?.inGame
  return gameHasStarted ? <div>Game comecou</div> : <Lobby />
}

export default Game
