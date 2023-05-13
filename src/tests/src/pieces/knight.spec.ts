import { describe, expect, test } from 'vitest'
import { KNIGHT } from '../../../pieces/knight'
import { getEmptyBoard } from '../../helpers/emptyBoard'

describe('knight', () => {
	describe('should be able to move with empty board', () => {
		test('1', () => {
			const result = KNIGHT.canMoveTo(
				'c8',
				'd6',
				getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'knight' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('2', () => {
			const result = KNIGHT.canMoveTo(
				'e3',
				'f5',
				getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'knight' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('3', () => {
			const result = KNIGHT.canMoveTo(
				'g8',
				'h6',
				getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'knight' },
					},
				}),
			)

			expect(result).toBe(true)
		})

		test('4', () => {
			const result = KNIGHT.canMoveTo(
				'e7',
				'd5',
				getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'knight' },
					},
				}),
			)

			expect(result).toBe(true)
		})
	})

	describe('should not be able to move with empty board', () => {
		test('1', () => {
			const result = KNIGHT.canMoveTo(
				'c8',
				'd5',
				getEmptyBoard({
					turn: 'black',
					position: {
						c8: { color: 'black', piece: 'knight' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('2', () => {
			const result = KNIGHT.canMoveTo(
				'e3',
				'a3',
				getEmptyBoard({
					turn: 'white',
					position: {
						e3: { color: 'white', piece: 'knight' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('3', () => {
			const result = KNIGHT.canMoveTo(
				'g8',
				'e4',
				getEmptyBoard({
					turn: 'black',
					position: {
						g8: { color: 'black', piece: 'knight' },
					},
				}),
			)

			expect(result).toBe(false)
		})

		test('4', () => {
			const result = KNIGHT.canMoveTo(
				'e7',
				'h2',
				getEmptyBoard({
					turn: 'white',
					position: {
						e7: { color: 'white', piece: 'knight' },
					},
				}),
			)

			expect(result).toBe(false)
		})
	})
})
