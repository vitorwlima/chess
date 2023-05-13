export const KNIGHT = new Piece({
	name: 'knight',
	notation: 'n',
	unicode: '♞',
	pattern: [
		[1, 2],
		[2, 1],
	],
	patternRepeat: false,
	canMoveTo: (from: string, to: string, board: Board) => {
		return true
	},
})