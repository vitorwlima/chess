export const PAWN = new Piece({
	name: 'pawn',
	notation: '',
	unicode: '',
	pattern: [
		[0, 1],
	],
	patternRepeat: false,
	canMoveTo: (from: string, to: string, board: Board) => {
		return true
	},
})