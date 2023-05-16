import { describe, expect, test } from 'vitest'
import { QUEEN } from '../../../pieces/queen'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('queen', () => {
  describe('should be able to move with empty board', () => {
    test('1', () => {
      const result = QUEEN.canMoveTo({
        from: 'c8',
        to: 'b7',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            c8: { color: 'black', piece: 'queen' },
          },
        }),
      })

      expect(result).toBe(true)
    })

    test('2', () => {
      const result = QUEEN.canMoveTo({
        from: 'e3',
        to: 'h6',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e3: { color: 'white', piece: 'queen' },
          },
        }),
      })

      expect(result).toBe(true)
    })

    test('3', () => {
      const result = QUEEN.canMoveTo({
        from: 'g8',
        to: 'g7',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            g8: { color: 'black', piece: 'queen' },
          },
        }),
      })

      expect(result).toBe(true)
    })

    test('4', () => {
      const result = QUEEN.canMoveTo({
        from: 'e7',
        to: 'e8',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e7: { color: 'white', piece: 'queen' },
          },
        }),
      })

      expect(result).toBe(true)
    })
  })

  describe('should not be able to move with empty board', () => {
    test('1', () => {
      const result = QUEEN.canMoveTo({
        from: 'c8',
        to: 'd6',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            c8: { color: 'black', piece: 'queen' },
          },
        }),
      })

      expect(result).toBe(false)
    })

    test('2', () => {
      const result = QUEEN.canMoveTo({
        from: 'e3',
        to: 'g4',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e3: { color: 'white', piece: 'queen' },
          },
        }),
      })

      expect(result).toBe(false)
    })

    test('3', () => {
      const result = QUEEN.canMoveTo({
        from: 'g8',
        to: 'e4',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            g8: { color: 'black', piece: 'queen' },
          },
        }),
      })

      expect(result).toBe(false)
    })

    test('4', () => {
      const result = QUEEN.canMoveTo({
        from: 'e7',
        to: 'h2',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e7: { color: 'white', piece: 'queen' },
          },
        }),
      })

      expect(result).toBe(false)
    })
  })

  describe('should not be able to move with pieces in between', () => {
    test('1', () => {
      const result = QUEEN.canMoveTo({
        from: 'c8',
        to: 'b7',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            c8: { color: 'black', piece: 'queen' },
            b7: { color: 'black', piece: 'pawn' },
          },
        }),
      })

      expect(result).toBe(false)
    })

    test('2', () => {
      const result = QUEEN.canMoveTo({
        from: 'e3',
        to: 'h6',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e3: { color: 'white', piece: 'queen' },
            g5: { color: 'black', piece: 'pawn' },
          },
        }),
      })

      expect(result).toBe(false)
    })
  })
})
