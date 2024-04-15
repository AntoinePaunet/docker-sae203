class Jeu
{
	constructor()
	{
		this.plateau = new Plateau();
		this.tabPiece = [];
		this.genererPiece();
		this.tpsBlanc = 600;
		this.tpsNoir = 600;
		this.tour = "Blanc";
	}


	genererPiece()
	{
		let cpt = 0;
		for(i = 0; i < this.plateau.plateau.length ; i++)
		{
			for(j = 0 ; j < this.plateau.plateau[0].length ; j++)
			{
				this.tabPion[cpt] = new Piece(j, i, this.plateau.plateau[i][j]);
				cpt++;
			}
		}
	}



	tempsTour()
	{
		if( this.tour = "Noir" )
		{
			while( this.tour == "Noir" )
			{
				this.tpsNoir--;
				setTimeout(1000);
			}
		}else
		{
			while( this.tour == "Blanc" )
			{
				this.tpsBlanc--;
				setTimeout(1000);
			}
		}
	}


	getTour()
	{
		return this.tour;
	}


	setTour()
	{
		if( this.tour == "Noir" )
		{
			this.tour == "Blanc";
		}else{
			this.tour = "Noir";
		}
	}

	deplacer(xDep, yDep, xArr, yArr)
	{
		this.plateau.getPiece(xDep, yDep).deplacer(xArr, yArr, this.plateau);
	}
}