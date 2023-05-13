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
	canMoveTo: (from: string, to: string, board: Board) => {
		return true
	},
})
