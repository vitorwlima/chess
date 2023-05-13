import { describe, expect, test } from 'vitest'
import { BISHOP } from '../../../pieces/bishop'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('bishop', () => {
	describe('should be able to move with empty board', () => {
		test('1', () => {
			const result = BISHOP.canMoveTo(
				'c8',
				'a6',
				getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'bishop' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('2', () => {
			const result = BISHOP.canMoveTo(
				'e3',
				'a7',
				getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'bishop' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('3', () => {
			const result = BISHOP.canMoveTo(
				'g8',
				'e6',
				getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'bishop' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('4', () => {
			const result = BISHOP.canMoveTo(
				'e7',
				'h4',
				getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'bishop' },
					},
				}),
			)

			expect(result).toBe(true)
		})
	})

	describe('should not be able to move with empty board', () => {
		test('1', () => {
			const result = BISHOP.canMoveTo(
				'c8',
				'a5',
				getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'bishop' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('2', () => {
			const result = BISHOP.canMoveTo(
				'e3',
				'a8',
				getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'bishop' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('3', () => {
			const result = BISHOP.canMoveTo(
				'g8',
				'e4',
				getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'bishop' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('4', () => {
			const result = BISHOP.canMoveTo(
				'e7',
				'h2',
				getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'bishop' },
					},
				}),
			)

			expect(result).toBe(false)
		})
	})
})
