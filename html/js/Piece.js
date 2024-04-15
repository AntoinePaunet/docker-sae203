export default class Piece
{
	static NB_LIG = 8;
	static NB_COL = 8;
	static TALLE_IMG = 80;

	constructor(lig, col, num)
	{
		this.num = num;
		this.lig = lig;
		this.col = col;
		this.selectionner = false;
		if(lig < 0) this.lig = 0;
		if(lig > Piece.NB_LIG) this.lig = Piece.NB_LIG-1;
		if(col < 0) this.col = 0;
		if(col > Piece.NB_COL) this.col = Piece.NB_COL-1;
			
    }

	deplacementValide(ligDest, colDest) {return true;}
	
	getNum    () {return this.num;}
	getLigne  () {return this.lig;}
	getColonne() {return this.col;}

	selection(tabPlateau)  
	{
		let deplacementsValides = [	[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
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
					&& !this.autrePieceMemeCouleur(i, j, tabPlateau))
					deplacementsValides[i][j] = 1;
			}
		}

		console.log(deplacementsValides)

		return deplacementsValides;
	}

	deplacer(ligDest, colDest, tabPlateau)
	{
		if(    !(ligDest === this.lig && colDest === this.col)
			|| !this.deplacementValide(ligDest,colDest) 
			|| tabPlateau[ligDest][colDest] === 15
			|| this.autrePieceMemeCouleur(ligDest, colDest, tabPlateau))
			return false;
 
		tabPlateau[this.lig][this.col] = 0;
		tabPlateau[ligDest][colDest] = this.num;
		this.lig = ligDest;
		this.col = colDest;
		return true;
	}

	autrePieceMemeCouleur(ligDest, colDest, tabPlateau)
	{
		if(tabPlateau[ligDest][colDest] === 0) return false
		
		return Math.abs(tabPlateau[ligDest][colDest] - this.num) <= 6;
	}
}