import { Piece } from './piece'

export const KNIGHT = new Piece({
  name: 'knight',
  notation: 'n',
  unicode: '♞',
  pattern: [
    [1, 2],
    [2, 1],
  ],
  patternRepeat: false,
})
