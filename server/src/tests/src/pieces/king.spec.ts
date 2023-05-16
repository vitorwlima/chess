import { describe, expect, test } from 'vitest'
import { KING } from '../../../pieces/king'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('king', () => {
  describe('should be able to move with empty board', () => {
    test('1', () => {
      const result = KING.canMoveTo({
        from: 'c8',
        to: 'b7',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            c8: { color: 'black', piece: 'king' },
          },
        }),
      })

      expect(result).toBe(true)
    })

    test('2', () => {
      const result = KING.canMoveTo({
        from: 'e3',
        to: 'f3',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e3: { color: 'white', piece: 'king' },
          },
        }),
      })

      expect(result).toBe(true)
    })

    test('3', () => {
      const result = KING.canMoveTo({
        from: 'g8',
        to: 'g7',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            g8: { color: 'black', piece: 'king' },
          },
        }),
      })

      expect(result).toBe(true)
    })

    test('4', () => {
      const result = KING.canMoveTo({
        from: 'e7',
        to: 'e8',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e7: { color: 'white', piece: 'king' },
          },
        }),
      })

      expect(result).toBe(true)
    })
  })

  describe('should not be able to move with empty board', () => {
    test('1', () => {
      const result = KING.canMoveTo({
        from: 'c8',
        to: 'c6',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            c8: { color: 'black', piece: 'king' },
          },
        }),
      })

      expect(result).toBe(false)
    })

    test('2', () => {
      const result = KING.canMoveTo({
        from: 'e3',
        to: 'a3',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e3: { color: 'white', piece: 'king' },
          },
        }),
      })

      expect(result).toBe(false)
    })

    test('3', () => {
      const result = KING.canMoveTo({
        from: 'g8',
        to: 'e4',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            g8: { color: 'black', piece: 'king' },
          },
        }),
      })

      expect(result).toBe(false)
    })

    test('4', () => {
      const result = KING.canMoveTo({
        from: 'e7',
        to: 'h2',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e7: { color: 'white', piece: 'king' },
          },
        }),
      })

      expect(result).toBe(false)
    })
  })
})
