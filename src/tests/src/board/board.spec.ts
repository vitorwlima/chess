import { describe, expect, test } from 'vitest'
import { Board } from '../../../board'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('piece', () => {
  describe('should not move', () => {
    test('from opposite turn color', () => {
      const originalPosition: Partial<Board['position']> = {
        a3: { color: 'white', piece: 'bishop' },
        b4: { color: 'black', piece: 'pawn' },
      }

      const board = getEmptyBoard({
        turn: 'black',
        position: originalPosition,
      })

      const newBoard = board.moveTo({ from: 'a3', to: 'b4' })

      expect(newBoard.position).toStrictEqual(originalPosition)
    })

    test('from empty square', () => {
      const board = new Board()

      const newBoard = board.moveTo({ from: 'a3', to: 'a4' })

      expect(newBoard.position).toStrictEqual(new Board().position)
    })

    test('to same color square', () => {
      const board = new Board()

      const newBoard = board.moveTo({ from: 'b1', to: 'd2' })

      expect(newBoard.position).toStrictEqual(new Board().position)
    })
  })
})
