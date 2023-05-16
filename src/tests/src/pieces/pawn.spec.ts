import { describe, expect, test } from 'vitest'
import { PAWN } from '../../../pieces/pawn'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('pawn', () => {
	describe('should be able to move with empty board', () => {
		test('1', () => {
			const result = PAWN.canMoveTo({
				from: 'a2',
				to: 'a3',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						a2: { color: 'white', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(true)
		})

		test('2', () => {
			const result = PAWN.canMoveTo({
				from: 'b7',
				to: 'b6',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						b7: { color: 'black', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(true)
		})

		test('3', () => {
			const result = PAWN.canMoveTo({
				from: 'e2',
				to: 'e4',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e2: { color: 'white', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(true)
		})

		test('4', () => {
			const result = PAWN.canMoveTo({
				from: 'd7',
				to: 'd5',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						d7: { color: 'black', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(true)
		})
	})

	describe('should not be able to move with empty board', () => {
		test('1', () => {
			const result = PAWN.canMoveTo({
				from: 'a2',
				to: 'a4',
				board: getEmptyBoard({
					turn: 'white',
					movesPlayed: 2,
					position: {
						a2: { color: 'white', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('2', () => {
			const result = PAWN.canMoveTo({
				from: 'e4',
				to: 'e6',
				board: getEmptyBoard({
					turn: 'white',
					movesPlayed: 2,
					position: {
						e4: { color: 'white', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('3', () => {
			const result = PAWN.canMoveTo({
				from: 'g6',
				to: 'g4',
				board: getEmptyBoard({
					turn: 'black',
					movesPlayed: 10,
					position: {
						g6: { color: 'black', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('4', () => {
			const result = PAWN.canMoveTo({
				from: 'e7',
				to: 'h2',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(false)
		})
	})

	describe('should not be able to move with pieces in between', () => {
		test('1', () => {
			const result = PAWN.canMoveTo({
				from: 'a2',
				to: 'a4',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						a2: { color: 'white', piece: 'pawn' },
						a3: { color: 'white', piece: 'knight' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('2', () => {
			const result = PAWN.canMoveTo({
				from: 'b4',
				to: 'b3',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						b4: { color: 'black', piece: 'pawn' },
						b3: { color: 'white', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(false)
		})
	})

	describe('should be able to take', () => {
		test('1', () => {
			const result = PAWN.canMoveTo({
				from: 'a2',
				to: 'b3',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						a2: { color: 'white', piece: 'pawn' },
						b3: { color: 'black', piece: 'pawn' },
					},
				}),
			})

			expect(result).toBe(true)
		})

		test('2', () => {
			const result = PAWN.canMoveTo({
				from: 'd5',
				to: 'e4',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						d5: { color: 'black', piece: 'pawn' },
						e4: { color: 'white', piece: 'knight' },
					},
				}),
			})

			expect(result).toBe(true)
		})
	})
})
