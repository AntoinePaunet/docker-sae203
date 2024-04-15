export default class Piece
{
	// attributs "static private"
	static #NB_LIG = 8;
	static #NB_COL = 8;
	static #TALLE_IMG = 80;
	
	// attributs "protected"
	lig;
	col;

	// attibuts "private"
	#num

	constructor(lig, col, num)
	{
		this.#num = num;
		this.lig = lig;
		this.col = col;
		this.selectionner = false;
		if(lig < 0) this.lig = 0;
		if(lig > Piece.#NB_LIG) this.lig = Piece.#NB_LIG-1;
		if(col < 0) this.col = 0;
		if(col > Piece.#NB_COL) this.col = Piece.#NB_COL-1;
			
    }

	deplacementValide(ligDest, colDest) {return true;}
	
	getNum    () {return this.#num;}
	getLigne  () {return this.lig;}
	getColonne() {return this.col;}

	selection() {}

	deplacer(ligDest, colDest, plateau)
	{
		if(    !(ligDest === this.lig && colDest === this.col)
			|| !this.deplacementValide(ligDest,colDest) 
			|| plateau.getPiece(ligDest, colDest) === 15
			|| Math.abs(plateau.getPiece(ligDest, colDest) - this.#num) <= 6)
			return false;
 
		plateau.setPiece(this.lig, this.col, 0);
		plateau.setPiece(ligDest,   colDest,   this.#num);
		this.lig = ligDest;
		this.col = colDest;
		return true;
	}
}