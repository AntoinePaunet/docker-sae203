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
		if(    !(ligDest === this.lig && colDest === this.col)
			|| !this.deplacementValide(ligDest,colDest) 
			|| tabPlateau.getPiece(ligDest, colDest) === 15
			|| this.autrePieceMemeCouleur(ligDest, colDest, tabPlateau))
			return false;
 
		plateau.setPiece(this.lig, this.col, 0);
		plateau.setPiece(ligDest,   colDest,   this.#num);
		this.lig = ligDest;
		this.col = colDest;
		return true;
	}

	autrePieceMemeCouleur(ligDest, colDest, tabPlateau)
	{
		if(tabPlateau.getPiece(ligDest, colDest) === 0) return false
		
		return Math.abs(tabPlateau.getPiece(ligDest, colDest) - this.#num) <= 6;
	}
}