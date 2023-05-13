import { describe, expect, test } from 'vitest'
import { BISHOP } from '../../../pieces/bishop'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('bishop', () => {
	describe('should be able to move with empty board', () => {
		test('1', () => {
			const result = BISHOP.canMoveTo({
				from: 'c8',
				to: 'a6',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'bishop' },
					},
				}),
			})

			expect(result).toBe(true)
		})

		test('2', () => {
			const result = BISHOP.canMoveTo({
				from: 'e3',
				to: 'a7',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'bishop' },
					},
				}),
			})

			expect(result).toBe(true)
		})

		test('3', () => {
			const result = BISHOP.canMoveTo({
				from: 'g8',
				to: 'e6',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'bishop' },
					},
				}),
			})

			expect(result).toBe(true)
		})

		test('4', () => {
			const result = BISHOP.canMoveTo({
				from: 'e7',
				to: 'h4',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'bishop' },
					},
				}),
			})

			expect(result).toBe(true)
		})
	})

	describe('should not be able to move with empty board', () => {
		test('1', () => {
			const result = BISHOP.canMoveTo({
				from: 'c8',
				to: 'a5',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'bishop' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('2', () => {
			const result = BISHOP.canMoveTo({
				from: 'e3',
				to: 'a8',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'bishop' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('3', () => {
			const result = BISHOP.canMoveTo({
				from: 'g8',
				to: 'e4',
				board: getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'bishop' },
					},
				}),
			})

			expect(result).toBe(false)
		})

		test('4', () => {
			const result = BISHOP.canMoveTo({
				from: 'e7',
				to: 'h2',
				board: getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'bishop' },
					},
				}),
			})

			expect(result).toBe(false)
		})
	})
})
