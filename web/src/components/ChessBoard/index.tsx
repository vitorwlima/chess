'use client'

import { useGameState } from '@/hooks/useGameState'
import { Board } from '@/types/GameState'
import clsx from 'clsx'
import { BoardSquare } from '../BoardSquare'

export const ChessBoard = () => {
  const { gameState } = useGameState()

  if (!gameState) return null

  const playerIsWhite = gameState.players.find((p) => p.isMe)!.color === 'white'

  return (
    <div
      className={clsx('grid  grid-cols-8 grid-rows-8 border border-zinc-800', {
        '-rotate-90': playerIsWhite,
        'rotate-90': !playerIsWhite,
      })}
    >
      {Object.entries(gameState.board.position).map(([position, square]) => (
        <BoardSquare
          key={position}
          square={square}
          position={position as keyof Board['position']}
          isWhitePerspective={playerIsWhite}
        />
      ))}
    </div>
  )
}
