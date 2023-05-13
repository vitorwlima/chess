import { describe, expect, test } from 'vitest'
import { QUEEN } from '../../../pieces/queen'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('queen', () => {
	describe('should be able to move with empty board', () => {
		test('1', () => {
			const result = QUEEN.canMoveTo(
				'c8',
				'b7',
				getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'queen' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('2', () => {
			const result = QUEEN.canMoveTo(
				'e3',
				'h6',
				getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'queen' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('3', () => {
			const result = QUEEN.canMoveTo(
				'g8',
				'g7',
				getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'queen' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('4', () => {
			const result = QUEEN.canMoveTo(
				'e7',
				'e8',
				getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'queen' },
					},
				}),
			)

			expect(result).toBe(true)
		})
	})

	describe('should not be able to move with empty board', () => {
		test('1', () => {
			const result = QUEEN.canMoveTo(
				'c8',
				'd6',
				getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'queen' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('2', () => {
			const result = QUEEN.canMoveTo(
				'e3',
				'g4',
				getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'queen' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('3', () => {
			const result = QUEEN.canMoveTo(
				'g8',
				'e4',
				getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'queen' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('4', () => {
			const result = QUEEN.canMoveTo(
				'e7',
				'h2',
				getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'queen' },
					},
				}),
			)

			expect(result).toBe(false)
		})
	})
})
