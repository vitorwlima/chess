'use client'

import { Board, Square } from '@/types/GameState'
import clsx from 'clsx'

type Props = {
  square: Square
  position: keyof Board['position']
}

const blackSquares = [
  'a1',
  'a3',
  'a5',
  'a7',
  'b2',
  'b4',
  'b6',
  'b8',
  'c1',
  'c3',
  'c5',
  'c7',
  'd2',
  'd4',
  'd6',
  'd8',
  'e1',
  'e3',
  'e5',
  'e7',
  'f2',
  'f4',
  'f6',
  'f8',
  'g1',
  'g3',
  'g5',
  'g7',
  'h2',
  'h4',
  'h6',
  'h8',
]

const pieces = {
  white: {
    king: '♔',
    queen: '♕',
    rook: '♖',
    bishop: '♗',
    knight: '♘',
    pawn: '♙',
  },
  black: {
    king: '♚',
    queen: '♛',
    rook: '♜',
    bishop: '♝',
    knight: '♞',
    pawn: '♟︎',
  },
}

export const BoardSquare: React.FC<Props> = ({ square, position }) => {
  return (
    <div
      className={clsx('grid h-16 w-16 rotate-90 place-items-center text-5xl', {
        'bg-zinc-500': blackSquares.includes(position),
        'bg-white': !blackSquares.includes(position),
      })}
    >
      {square ? pieces[square.color][square.piece] : ''}
    </div>
  )
}
