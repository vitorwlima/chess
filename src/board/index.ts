type Square = {
  color: 'black' | 'white'
  piece: 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn'
} | null

class Board {
	a1: Square
	a2: Square
	a3: Square
	a4: Square
	a5: Square
	a6: Square
	a7: Square
	a8: Square
	b1: Square
	b2: Square
	b3: Square
	b4: Square
	b5: Square
	b6: Square
	b7: Square
	b8: Square
	c1: Square
	c2: Square
	c3: Square
	c4: Square
	c5: Square
	c6: Square
	c7: Square
	c8: Square
	d1: Square
	d2: Square
	d3: Square
	d4: Square
	d5: Square
	d6: Square
	d7: Square
	d8: Square
	e1: Square
	e2: Square
	e3: Square
	e4: Square
	e5: Square
	e6: Square
	e7: Square
	e8: Square
	f1: Square
	f2: Square
	f3: Square
	f4: Square
	f5: Square
	f6: Square
	f7: Square
	f8: Square
	g1: Square
	g2: Square
	g3: Square
	g4: Square
	g5: Square
	g6: Square
	g7: Square
	g8: Square
	h1: Square
	h2: Square
	h3: Square
	h4: Square
	h5: Square
	h6: Square
	h7: Square
	h8: Square

	constructor() {
		this.a1 = { color: 'white', piece: 'rook' }
		this.a2 = { color: 'white', piece: 'pawn' }
		this.a3 = null
		this.a4 = null
		this.a5 = null
		this.a6 = null
		this.a7 = { color: 'black', piece: 'pawn' }
		this.a8 = { color: 'black', piece: 'rook' }
		this.b1 = { color: 'white', piece: 'knight' }
		this.b2 = { color: 'white', piece: 'pawn' }
		this.b3 = null
		this.b4 = null
		this.b5 = null
		this.b6 = null
		this.b7 = { color: 'black', piece: 'pawn' }
		this.b8 = { color: 'black', piece: 'knight' }
		this.c1 = { color: 'white', piece: 'bishop' }
		this.c2 = { color: 'white', piece: 'pawn' }
		this.c3 = null
		this.c4 = null
		this.c5 = null
		this.c6 = null
		this.c7 = { color: 'black', piece: 'pawn' }
		this.c8 = { color: 'black', piece: 'bishop' }
		this.d1 = { color: 'white', piece: 'queen' }
		this.d2 = { color: 'white', piece: 'pawn' }
		this.d3 = null
		this.d4 = null
		this.d5 = null
		this.d6 = null
		this.d7 = { color: 'black', piece: 'pawn' }
		this.d8 = { color: 'black', piece: 'queen' }
		this.e1 = { color: 'white', piece: 'king' }
		this.e2 = { color: 'white', piece: 'pawn' }
		this.e3 = null
		this.e4 = null
		this.e5 = null
		this.e6 = null
		this.e7 = { color: 'black', piece: 'pawn' }
		this.e8 = { color: 'black', piece: 'king' }
		this.f1 = { color: 'white', piece: 'bishop' }
		this.f2 = { color: 'white', piece: 'pawn' }
		this.f3 = null
		this.f4 = null
		this.f5 = null
		this.f6 = null
		this.f7 = { color: 'black', piece: 'pawn' }
		this.f8 = { color: 'black', piece: 'bishop' }
		this.g1 = { color: 'white', piece: 'knight' }
		this.g2 = { color: 'white', piece: 'pawn' }
		this.g3 = null
		this.g4 = null
		this.g5 = null
		this.g6 = null
		this.g7 = { color: 'black', piece: 'pawn' }
		this.g8 = { color: 'black', piece: 'knight' }
		this.h1 = { color: 'white', piece: 'rook' }
		this.h2 = { color: 'white', piece: 'pawn' }
		this.h3 = null
		this.h4 = null
		this.h5 = null
		this.h6 = null
		this.h7 = { color: 'black', piece: 'pawn' }
		this.h8 = { color: 'black', piece: 'rook' }
	}
}
