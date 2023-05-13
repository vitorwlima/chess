class Piece {
	name: string
	notation: string
	unicode: string
	pattern: number[][]
	patternRepeat: boolean
	canMoveTo: (from: string, to: string, board: Board) => boolean

	constructor(piece: Piece) {
		Object.assign(this, piece)
	}
}
