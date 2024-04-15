class Plateau
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

