import { Board } from '../board'

export class Piece {
	public constructor(piece: Omit<Piece, 'canMoveTo'>) {
		Object.assign(this, piece)

		this.canMoveTo = (
			from: keyof Board['position'],
			to: keyof Board['position'],
			board: Board,
		) => {
			const isCorrectTurn = board.turn === board.position[from]?.color
			if (isCorrectTurn === false) return false

			const fromMatchesPiece = board.position[from]?.piece === this.name
			if (fromMatchesPiece === false) return false

			const toMatchesColor =
        board.position[to]?.color === board.position[from]?.color
			if (toMatchesColor === true) return false

			const horizontalSquaresToTravel = Math.abs(
				from[0].charCodeAt(0) - to[0].charCodeAt(0),
			)
			const verticalSquaresToTravel = Math.abs(
				from[1].charCodeAt(0) - to[1].charCodeAt(0),
			)

			const pieceCanTravel = this.pattern.some((pattern) => {
				const [horizontal, vertical] = pattern

				if (this.patternRepeat) {
					const minimizedHorizontalByHorizontal =
            horizontalSquaresToTravel / (horizontalSquaresToTravel || 1)
					const minimizedVerticalByHorizontal =
            verticalSquaresToTravel / (horizontalSquaresToTravel || 1)

					const minimizedHorizontalByVertical =
            horizontalSquaresToTravel / (verticalSquaresToTravel || 1)
					const minimizedVerticalByVertical =
            verticalSquaresToTravel / (verticalSquaresToTravel || 1)

					return (
						(minimizedHorizontalByHorizontal === horizontal &&
              minimizedVerticalByHorizontal === vertical) ||
            (minimizedHorizontalByVertical === horizontal &&
              minimizedVerticalByVertical === vertical)
					)
				} else {
					return (
						horizontalSquaresToTravel === horizontal &&
            verticalSquaresToTravel === vertical
					)
				}
			})

			return pieceCanTravel
		}
	}

	public name: 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn'
	public notation: string
	public unicode: string
	public pattern: number[][]
	public patternRepeat: boolean
	public canMoveTo: (
    from: keyof Board['position'],
    to: keyof Board['position'],
    board: Board
  ) => boolean
}
