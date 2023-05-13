import { Piece } from '.'

export const KING = new Piece({
	name: 'king',
	notation: 'k',
	unicode: '♚',
	pattern: [
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	],
	patternRepeat: false,
})
