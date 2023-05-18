'use client'

import { useGameState } from '@/hooks/useGameState'
import { Events } from '@/types/Events'
import { Board, Square } from '@/types/GameState'
import clsx from 'clsx'
import { useState } from 'react'
import { BoardSquare } from '../BoardSquare'

export const ChessBoard = () => {
  const { emitEvent, gameState } = useGameState()
  const [nextMove, setNextMove] = useState<keyof Board['position'] | null>(null)

  if (!gameState) return null

  const playerIsWhite = gameState.players.find((p) => p.isMe)!.color === 'white'

  const handleSquareClick = (
    position: keyof Board['position'],
    square: Square,
  ) => {
    if (!nextMove) {
      if (!square?.piece) return
      setNextMove(position)
    } else if (nextMove === position) {
      setNextMove(null)
    } else {
      emitEvent(Events.MOVE_PIECE, {
        from: nextMove,
        to: position,
      })
      setNextMove(null)
    }
  }

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
          onSquareClick={handleSquareClick}
          selectedSquare={nextMove}
        />
      ))}
    </div>
  )
}
