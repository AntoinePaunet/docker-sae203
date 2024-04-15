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
				switch(this.plateau[i][j]%7)
				{
					case 1 : this.tabPieces[cpt] = new Pion(i, j, this.plateau[i][j]);
					case 2 : this.tabPieces[cpt] = new Tour(i, j, this.plateau[i][j]);
					case 3 : this.tabPieces[cpt] = new Cavalier(i, j, this.plateau[i][j]);
					case 4 : this.tabPieces[cpt] = new Fou(i, j, this.plateau[i][j]);
					case 5 : this.tabPieces[cpt] = new Reine(i, j, this.plateau[i][j]);
					case 6 : this.tabPieces[cpt] = new Roi(i, j, this.plateau[i][j]);
				}
			}
		}

		for( let i = 0 ; i < this.tabPieces.length ; i++ )
		{
			console.log(this.tabPieces[i] , " ")
		}


	}


	getPiece(x, y)
	{
		if(x < 1 || x > 9 || y < 1 || y > 9)
		{
			return false;
		}

		return this.plateau[x,y];
	}

	setPiece(x, y, piece)
	{
		if(x < 1 || x > 9 || y < 1 || y > 9)
		{
			return false;
		}

		this.tabPlateau[x,y] = piece;
	}
}

