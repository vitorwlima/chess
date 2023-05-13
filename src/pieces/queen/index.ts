export const QUEEN = new Piece({
	name: 'king',
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
	canMoveTo: (from: string, to: string, board: Board) => {
		return true
	},
})