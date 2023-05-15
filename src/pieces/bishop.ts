import { Piece } from './piece'

export const BISHOP = new Piece({
	name: 'bishop',
	notation: 'b',
	unicode: '♝',
	pattern: [
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	],
	patternRepeat: true,
})
