export default class Piece
{
	// attributs "static private"
	static #NB_LIG = 8;
	static #NB_COL = 8;
	static #TALLE_IMG = 80;
	
	// attributs "protected"
	_lig;
	_col;

	// attibuts "private"
	#num

	constructor(lig, col, num)
	{
		this.#num = num;
		this._lig = lig;
		this._col = col;
		if(lig < 0) this._lig = 0;
		if(lig > Piece.#NB_LIG) this._lig = Piece.#NB_LIG-1;
		if(col < 0) this._col = 0;
		if(col > Piece.#NB_COL) this._col = Piece.#NB_COL-1;
			
    }

	deplacementValide(ligDest, colDest) {return true;}
	
	getNum    () {return this.#num;}
	getLigne  () {return this._lig;}
	getColonne() {return this._col;}

	selection() {}

	deplacer(ligDest, colDest, plateau)
	{
		if(    !(ligDest === this._lig && colDest === this._col)
			|| !this.deplacementValide(ligDest,colDest) 
			|| plateau.getPiece(ligDest, colDest) === 15
			|| Math.abs(plateau.getPiece(ligDest, colDest) - this.#num) <= 6)
			return false;
 
		plateau.setPiece(this._lig, this._col, 0);
		plateau.setPiece(ligDest,   colDest,   this.#num);
		this._lig = ligDest;
		this._col = colDest;
		return true;
	}


}