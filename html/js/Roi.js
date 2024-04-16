import Piece from "./Piece.js";

export default class Roi extends Piece
{
    constructor(num, x, y) {super(num, x, y)}

    deplacementValide(xDest, yDest, tabPieces)
    {	
		return    super.deplacementValide(xDest, yDest, tabPieces) 
		       && Math.abs(xDest-this.x) <= 1 
			   && Math.abs(yDest-this.y) <= 1
			   && !this.#positionAttaquee(xDest, yDest, tabPieces);
    }

	echecMat(tabPieces)
	{
		if(!this.#peutSeDeplacer(tabPieces) && this.#positionAttaquee(this.x, this.y, tabPieces)) 
		{
			console.log("echec et mat")
			Piece.roiEnEchec = true;
		}
		Piece.roiEnEchec = false;

		return Piece.roiEnEchec;
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