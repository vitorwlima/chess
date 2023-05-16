import { Piece } from './piece'

export const PAWN = new Piece({
	name: 'pawn',
	notation: '',
	unicode: '',
	pattern: [[0, 1]],
	patternRepeat: false,
	takePattern: [
		[1, 1],
		[-1, 1],
	],
	firstMovePattern: [[0, 2]],
})
