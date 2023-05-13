import { describe, expect, test } from 'vitest'
import { KING } from '../../../pieces/king'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('king', () => {
	describe('should be able to move with empty board', () => {
		test('1', () => {
			const result = KING.canMoveTo(
				'c8',
				'b7',
				getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'king' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('2', () => {
			const result = KING.canMoveTo(
				'e3',
				'f3',
				getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'king' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('3', () => {
			const result = KING.canMoveTo(
				'g8',
				'g7',
				getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'king' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('4', () => {
			const result = KING.canMoveTo(
				'e7',
				'e8',
				getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'king' },
					},
				}),
			)

			expect(result).toBe(true)
		})
	})

	describe('should not be able to move with empty board', () => {
		test('1', () => {
			const result = KING.canMoveTo(
				'c8',
				'c6',
				getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'king' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('2', () => {
			const result = KING.canMoveTo(
				'e3',
				'a3',
				getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'king' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('3', () => {
			const result = KING.canMoveTo(
				'g8',
				'e4',
				getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'king' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('4', () => {
			const result = KING.canMoveTo(
				'e7',
				'h2',
				getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'king' },
					},
				}),
			)

			expect(result).toBe(false)
		})
	})
})
