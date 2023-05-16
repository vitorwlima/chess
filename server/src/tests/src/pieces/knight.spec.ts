import { describe, expect, test } from 'vitest'
import { KNIGHT } from '../../../pieces/knight'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('knight', () => {
  describe('should be able to move with empty board', () => {
    test('1', () => {
      const result = KNIGHT.canMoveTo({
        from: 'c8',
        to: 'd6',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            c8: { color: 'black', piece: 'knight' },
          },
        }),
      })

      expect(result).toBe(true)
    })

    test('2', () => {
      const result = KNIGHT.canMoveTo({
        from: 'e3',
        to: 'f5',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e3: { color: 'white', piece: 'knight' },
          },
        }),
      })

      expect(result).toBe(true)
    })

    test('3', () => {
      const result = KNIGHT.canMoveTo({
        from: 'g8',
        to: 'h6',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            g8: { color: 'black', piece: 'knight' },
          },
        }),
      })

      expect(result).toBe(true)
    })

    test('4', () => {
      const result = KNIGHT.canMoveTo({
        from: 'e7',
        to: 'd5',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e7: { color: 'white', piece: 'knight' },
          },
        }),
      })

      expect(result).toBe(true)
    })
  })

  describe('should not be able to move with empty board', () => {
    test('1', () => {
      const result = KNIGHT.canMoveTo({
        from: 'c8',
        to: 'd5',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            c8: { color: 'black', piece: 'knight' },
          },
        }),
      })

      expect(result).toBe(false)
    })

    test('2', () => {
      const result = KNIGHT.canMoveTo({
        from: 'e3',
        to: 'a3',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e3: { color: 'white', piece: 'knight' },
          },
        }),
      })

      expect(result).toBe(false)
    })

    test('3', () => {
      const result = KNIGHT.canMoveTo({
        from: 'g8',
        to: 'e4',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            g8: { color: 'black', piece: 'knight' },
          },
        }),
      })

      expect(result).toBe(false)
    })

    test('4', () => {
      const result = KNIGHT.canMoveTo({
        from: 'e7',
        to: 'h2',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e7: { color: 'white', piece: 'knight' },
          },
        }),
      })

      expect(result).toBe(false)
    })
  })

  describe('should be able to move with pieces in between', () => {
    test('1', () => {
      const result = KNIGHT.canMoveTo({
        from: 'c8',
        to: 'd6',
        board: getEmptyBoard({
          turn: 'black',
          position: {
            c8: { color: 'black', piece: 'knight' },
            d7: { color: 'black', piece: 'pawn' },
          },
        }),
      })

      expect(result).toBe(true)
    })

    test('2', () => {
      const result = KNIGHT.canMoveTo({
        from: 'e3',
        to: 'f5',
        board: getEmptyBoard({
          turn: 'white',
          position: {
            e3: { color: 'white', piece: 'knight' },
            f4: { color: 'white', piece: 'pawn' },
            e4: { color: 'black', piece: 'queen' },
          },
        }),
      })

      expect(result).toBe(true)
    })
  })
})
