import { describe, expect, test } from 'vitest'
import { ROOK } from '../../../pieces/rook'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('rook', () => {
	describe('should be able to move with empty board', () => {
		test('1', () => {
			const result = ROOK.canMoveTo(
				'c8',
				'h8',
				getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'rook' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('2', () => {
			const result = ROOK.canMoveTo(
				'e3',
				'f3',
				getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'rook' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('3', () => {
			const result = ROOK.canMoveTo(
				'g8',
				'g7',
				getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'rook' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('4', () => {
			const result = ROOK.canMoveTo(
				'e7',
				'e1',
				getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'rook' },
					},
				}),
			)

			expect(result).toBe(true)
		})
	})

	describe('should not be able to move with empty board', () => {
		test('1', () => {
			const result = ROOK.canMoveTo(
				'c8',
				'd6',
				getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'rook' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('2', () => {
			const result = ROOK.canMoveTo(
				'e3',
				'g4',
				getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'rook' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('3', () => {
			const result = ROOK.canMoveTo(
				'g8',
				'e4',
				getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'rook' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('4', () => {
			const result = ROOK.canMoveTo(
				'e7',
				'h2',
				getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'rook' },
					},
				}),
			)

			expect(result).toBe(false)
		})
	})
})
