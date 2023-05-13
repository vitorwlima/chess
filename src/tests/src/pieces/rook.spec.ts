import { describe, expect, test } from 'vitest'
import { ROOK } from '../../../pieces/rook'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('rook', () => {
	describe('should be able to move with empty board', () => {
		test('1', () => {
			const result = ROOK.canMoveTo({
				from: 'c8',
				to: 'h8',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'rook' },
					},
				}),
			})

			expect(result).toBe(true)
		})

		test('2', () => {
			const result = ROOK.canMoveTo({
				from: 'e3',
				to: 'f3',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'rook' },
					},
				}),
			})

			expect(result).toBe(true)
		})

		test('3', () => {
			const result = ROOK.canMoveTo({
				from: 'g8',
				to: 'g7',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'rook' },
					},
				}),
			})

			expect(result).toBe(true)
		})

		test('4', () => {
			const result = ROOK.canMoveTo({
				from: 'e7',
				to: 'e1',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'rook' },
					},
				}),
			})

			expect(result).toBe(true)
		})
	})

	describe('should not be able to move with empty board', () => {
		test('1', () => {
			const result = ROOK.canMoveTo({
				from: 'c8',
				to: 'd6',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'rook' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('2', () => {
			const result = ROOK.canMoveTo({
				from: 'e3',
				to: 'g4',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'rook' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('3', () => {
			const result = ROOK.canMoveTo({
				from: 'g8',
				to: 'e4',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'rook' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('4', () => {
			const result = ROOK.canMoveTo({
				from: 'e7',
				to: 'h2',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'rook' },
					},
				}),
			})

			expect(result).toBe(false)
		})
	})

	describe('should not be able to move with pieces in between', () => {
		test('1', () => {
			const result = ROOK.canMoveTo({
				from: 'c8',
				to: 'h8',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'rook' },
						d8: { color: 'black', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('2', () => {
			const result = ROOK.canMoveTo({
				from: 'e3',
				to: 'e8',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'rook' },
						e7: { color: 'black', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(false)
		})
	})
})
