import Piece from "./Piece.js";

export default class Roi extends Piece
{
    constructor(num, x, y) {super(num, x, y)}

    deplacementValide(xDest, yDest, tabPieces)
    {		
		return    super.deplacementValide(xDest, yDest, tabPieces) 
		       && Math.abs(xDest-this.x) <= 1 
			   && Math.abs(yDest-this.y) <= 1
			   && !this.#autrePiece(xDest, yDest, tabPieces)
			   && !this.#positionAttaquee(xDest, yDest, tabPieces);
    }

	echecEtMat(tabPieces)
	{
		//console.log(!this.#peutSeDeplacer(tabPieces));
		//console.log(this.#positionAttaquee(this.x, this.y, tabPieces));
		if(!this.#peutSeDeplacer(tabPieces) && this.#positionAttaquee(this.x, this.y, tabPieces)) console.log("echec et mat")
		return !this.#peutSeDeplacer(tabPieces) && this.#positionAttaquee(this.x, this.y, tabPieces);
	}

	#autrePiece(xDest, yDest, tabPieces)
	{
		return tabPieces[xDest][yDest] !== null;
	}

	#positionAttaquee(xDest, yDest, tabPieces)
	{
		for( let i = 0 ; i < tabPieces.length ; i++ )
		{	
			for ( let j = 0 ; j < tabPieces[0].length ; j++)
			{
				if(	   tabPieces[i][j] !== null
					&& !tabPieces[i][j].estMemeCouleur(this)
				    && tabPieces[i][j].deplacementValide(xDest, yDest, tabPieces)) return true;
			}
		}
		return false;
	}

	#peutSeDeplacer(tabPieces)
	{
		for( let i = 0 ; i < tabPieces.length ; i++ )
		{	
			for ( let j = 0 ; j < tabPieces[0].length ; j++)
			{
				if(this.deplacementValide(i, j, tabPieces)) return true;
			}
		}
		return false;
	}
}