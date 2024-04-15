import Pion from "./Pion.js";
import Tour from "./Tour.js";
import Cavalier from "./Cavalier.js";
import Reine from "./Reine.js";
import Roi from "./Roi.js";
import Fou from "./Fou.js";

export default class Plateau
{
	constructor()
	{
		this.plateau = [	[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
							[15, 2, 1, 0, 0, 0, 0, 7, 8, 15],
							[15, 3, 1, 0, 0, 0, 0, 7, 9, 15],
							[15, 4, 1, 0, 0, 0, 0, 7, 10, 15],
							[15, 5, 1, 0, 0, 0, 0, 7, 11, 15],
							[15, 6, 1, 0, 0, 0, 0, 7, 12, 15],
							[15, 4, 1, 0, 0, 0, 0, 7, 10, 15],
							[15, 3, 1, 0, 0, 0, 0, 7, 9, 15],
							[15, 2, 1, 0, 0, 0, 0, 7, 8, 15],
							[15, 15, 15, 15, 15, 15, 15, 15, 15, 15], //Anti erreur
																		];
		this.length = 8;
		this.nbPieces = 32;
		this.tabPieces = [];
		this.genererPieces();
	}

	genererPieces()
	{
		let cpt = 0;
		for( let i = 0 ; i < this.plateau.length ; i++ )
		{
			for ( let j = 0 ; j < this.plateau[0].length ; j++)
			{
				if(!(this.plateau[i][j] == 15 || this.plateau[i][j] == 0))
				{
					switch((this.plateau[i][j]%6) + 1)
					{
						case 1 : this.tabPieces[cpt] = new Pion(	i - 1, j - 1, this.plateau[i][j]); cpt++; break;
						case 2 : this.tabPieces[cpt] = new Tour(	i - 1, j - 1, this.plateau[i][j]); cpt++; break;
						case 3 : this.tabPieces[cpt] = new Cavalier(i - 1, j - 1, this.plateau[i][j]); cpt++; break;
						case 4 : this.tabPieces[cpt] = new Fou(		i - 1, j - 1, this.plateau[i][j]); cpt++; break;
						case 5 : this.tabPieces[cpt] = new Reine(	i - 1, j - 1, this.plateau[i][j]); cpt++; break;
						case 6 : this.tabPieces[cpt] = new Roi(		i - 1, j - 1, this.plateau[i][j]); cpt++; break;
					}
				}
			}
		}
	}


	getPieceTest(x, y)
	{
		console.log(x, y)
		for(let i = 0 ; i < this.tabPieces.length ; i++)
		{
			if(this.tabPieces[i].lig == x && this.tabPieces[i].col == y)
			{
				return this.tabPieces[i];
			}
		}
		console.log("Erreur")


		return null;
	}


	getPiece(x, y)
	{
		for(let i = 0 ; i < this.tabPieces.length ; i++)
		{
			if(this.tabPieces[i].lig == x && this.tabPieces[i].col == y)
			{
				return this.tabPieces[i];
			}
		}

		return null;
	}

	setPiece(x, y, piece)
	{
		this.plateau[x,y] = piece;
	}
}

