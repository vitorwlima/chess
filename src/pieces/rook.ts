import { Piece } from '.'

export const ROOK = new Piece({
	name: 'rook',
	notation: 'r',
	unicode: '♜',
	pattern: [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	],
	patternRepeat: true,
})
