import { Board } from '../board'

type CanMoveToInput = {
  from: keyof Board['position']
  to: keyof Board['position']
  board: Board
}

export class Piece {
  public name: 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn'
  public notation: string
  public unicode: string
  public pattern: number[][]
  public takePattern?: number[][]
  public firstMovePattern?: number[][]
  public patternRepeat: boolean
  public canMoveTo(data: CanMoveToInput) {
    const canMoveBasedOnTurnAndPiece = this.canMoveBasedOnTurnAndPiece(data)
    if (canMoveBasedOnTurnAndPiece === false) return false

    const canMoveBasedOnOtherPieces = this.canMoveBasedOnOtherPieces(data)
    if (canMoveBasedOnOtherPieces === false) return false

    const canMoveBasedOnPattern = this.canMoveBasedOnPattern(data)
    return canMoveBasedOnPattern
  }

  public constructor(piece: Omit<Piece, 'canMoveTo'>) {
    Object.assign(this, piece)
  }

  private canMoveBasedOnTurnAndPiece = ({
    from,
    to,
    board,
  }: CanMoveToInput) => {
    const isCorrectTurn = board.turn === board.position[from]?.color
    if (isCorrectTurn === false) return false

    const fromMatchesPiece = board.position[from]?.piece === this.name
    if (fromMatchesPiece === false) return false

    const toMatchesColor =
      board.position[to]?.color === board.position[from]?.color
    if (toMatchesColor === true) return false

    return true
  }

  private canMoveBasedOnOtherPieces = ({ from, to, board }: CanMoveToInput) => {
    const canSkipOtherPieces = board.position[from]?.piece === 'knight'
    if (canSkipOtherPieces === true) return true

    const affectedSquares: (keyof Board['position'])[] = []

    const isDiagonalMovement =
      Math.abs(from[0].charCodeAt(0) - to[0].charCodeAt(0)) ===
      Math.abs(from[1].charCodeAt(0) - to[1].charCodeAt(0))

    if (isDiagonalMovement) {
      const fromColumn = from[0].charCodeAt(0)
      const fromRow = from[1].charCodeAt(0)
      const toColumn = to[0].charCodeAt(0)
      const toRow = to[1].charCodeAt(0)

      const horizontalDirection = fromColumn < toColumn ? 1 : -1
      const verticalDirection = fromRow < toRow ? 1 : -1

      for (
        let column = fromColumn + horizontalDirection,
          row = fromRow + verticalDirection;
        column !== toColumn && row !== toRow;
        column += horizontalDirection, row += verticalDirection
      ) {
        const square = (String.fromCharCode(column) +
          String.fromCharCode(row)) as keyof Board['position']
        affectedSquares.push(square)
      }
    } else {
      const fromColumn = from[0].charCodeAt(0)
      const fromRow = from[1].charCodeAt(0)
      const toColumn = to[0].charCodeAt(0)
      const toRow = to[1].charCodeAt(0)

      const isVertical = fromColumn === toColumn

      if (isVertical) {
        const verticalDirection = fromRow < toRow ? 1 : -1

        for (
          let row = fromRow + verticalDirection;
          row !== toRow;
          row += verticalDirection
        ) {
          const square = (from[0] +
            String.fromCharCode(row)) as keyof Board['position']
          affectedSquares.push(square)
        }
      } else {
        const horizontalDirection = fromColumn < toColumn ? 1 : -1

        for (
          let column = fromColumn + horizontalDirection;
          column !== toColumn;
          column += horizontalDirection
        ) {
          const square = (String.fromCharCode(column) +
            from[1]) as keyof Board['position']
          affectedSquares.push(square)
        }
      }
    }

    const isPathClear = affectedSquares.every(
      (square) => board.position[square] == null,
    )
    return isPathClear
  }

  private canMoveBasedOnPattern = ({ from, to, board }: CanMoveToInput) => {
    const horizontalSquaresToTravel = Math.abs(
      from[0].charCodeAt(0) - to[0].charCodeAt(0),
    )
    const verticalSquaresToTravel = Math.abs(
      from[1].charCodeAt(0) - to[1].charCodeAt(0),
    )

    const patterns = this.getCorrectMovePattern({ from, to, board })

    const pieceCanTravel = patterns.some((pattern) => {
      const [horizontal, vertical] = pattern

      if (!this.patternRepeat) {
        return (
          horizontalSquaresToTravel === horizontal &&
          verticalSquaresToTravel === Math.abs(vertical)
        )
      }

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
    })

    return pieceCanTravel
  }

  private getCorrectMovePattern = ({ from, to, board }: CanMoveToInput) => {
    const piece = board.position[from]?.piece

    if (piece !== 'pawn') {
      return this.pattern
    }

    if (board.position[to] != null) {
      return this.convertPattern({
        color: board.turn,
        pattern: this.takePattern!,
      })
    }

    if (from[1] === '2' || from[1] === '7') {
      return this.convertPattern({
        color: board.turn,
        pattern: [...this.pattern, ...this.firstMovePattern!],
      })
    }

    return this.convertPattern({
      color: board.turn,
      pattern: this.pattern,
    })
  }

  private convertPattern = ({
    pattern,
    color,
  }: {
    pattern: number[][]
    color: 'white' | 'black'
  }) => {
    const orientation = color === 'white' ? 1 : -1

    return pattern.map(([horizontal, vertical]) => {
      return [horizontal, vertical * orientation]
    })
  }
}
