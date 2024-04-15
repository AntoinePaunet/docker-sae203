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

	selection(tabPlateau)  
	{
		deplacementsValides = [	[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
		                        [15,  0,  0,  0,  0,  0,  0,  0,  0, 15],
		                        [15,  0,  0,  0,  0,  0,  0,  0,  0, 15],
		                        [15,  0,  0,  0,  0,  0,  0,  0,  0, 15],
		                        [15,  0,  0,  0,  0,  0,  0,  0,  0, 15],
		                        [15,  0,  0,  0,  0,  0,  0,  0,  0, 15],
		                        [15,  0,  0,  0,  0,  0,  0,  0,  0, 15],
		                        [15,  0,  0,  0,  0,  0,  0,  0,  0, 15],
		                        [15,  0,  0,  0,  0,  0,  0,  0,  0, 15],
		                        [15, 15, 15, 15, 15, 15, 15, 15, 15, 15] ];
		
		for(let i = 1; i < tabPlateau.length-1; i++)
		{
			for(let j = 1; j < tabPlateau[0].length-1; j++)
			{
				if(    tabPlateau[i][j] === 0 
					&& this.deplacementValide(i, j) 
					&& !this.autrePieceMemeCouleur(tabPlateau)) 
					deplacementsValides[i][j] = 1;
			}
		}

		return deplacementsValides;
	}

	deplacer(ligDest, colDest, tabPlateau)
	{
		if(    !(ligDest === this._lig && colDest === this._col)
			|| !this.deplacementValide(ligDest,colDest) 
			|| tabPlateau.getPiece(ligDest, colDest) === 15
			|| this.autrePieceMemeCouleur(ligDest, colDest, tabPlateau))
			return false;
 
		tabPlateau.setPiece(this._lig, this._col, 0);
		tabPlateau.setPiece(ligDest,   colDest,   this.#num);
		this._lig = ligDest;
		this._col = colDest;
		return true;
	}

	autrePieceMemeCouleur(ligDest, colDest, tabPlateau)
	{
		if(tabPlateau.getPiece(ligDest, colDest) === 0) return false
		
		return Math.abs(tabPlateau.getPiece(ligDest, colDest) - this.#num) <= 6;
	}
}