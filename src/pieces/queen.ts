import { Piece } from '.'

export const QUEEN = new Piece({
	name: 'queen',
	notation: 'q',
	unicode: '♛',
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
	patternRepeat: true,
})
