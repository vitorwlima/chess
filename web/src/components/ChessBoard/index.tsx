'use client'

import { useGameState } from '@/hooks/useGameState'
import { Board } from '@/types/GameState'
import { BoardSquare } from '../BoardSquare'

export const ChessBoard = () => {
  const { gameState } = useGameState()

  if (!gameState) return null

  return (
    <div className="grid -rotate-90 grid-cols-8 grid-rows-8 border border-zinc-800">
      {Object.entries(gameState.board.position).map(
        ([position, square], index) => (
          <BoardSquare
            key={position}
            square={square}
            position={position as keyof Board['position']}
          />
        ),
      )}
    </div>
  )
}
