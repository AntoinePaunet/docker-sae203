export default class Interface
{
	constructor(ctx, plateau, plateauClass)
	{
		this.ctx = ctx;
		this.plateau = plateau;
		this.classPlateau = plateauClass;
	}

	drawMap()
	{
		this.ctx.clearRect(0, 0, 700, 700);

		let bg = new Image();
		bg.src = "../images/plateau.png"
		this.ctx.drawImage(bg, 0, 0)


		
		for(let i = 0 ; i < this.classPlateau.tabPieces.length ; i++) //Selon la pièce selectionnée
		{
			if(this.classPlateau.tabPieces[i].selectionner != null && this.classPlateau.tabPieces[i].selectionner)
			{

				this.drawDeplacementsValides(this.classPlateau.tabPieces[i].selection(this.plateau))

				this.ctx.beginPath();

				console.log(this.classPlateau.tabPieces[i].lig, (this.classPlateau.tabPieces[i].col))

				this.ctx.arc((this.classPlateau.tabPieces[i].lig * 87.5) + 42.5, (this.classPlateau.tabPieces[i].col * 87.5) + 42.5, 40, 0, Math.PI * 2);
		
				this.ctx.fillStyle = 'green';
		
				this.ctx.fill();
		
				this.ctx.closePath();
			}
		}

		let imgPiece = new Image();
		imgPiece.src = "../images/pieces.png"

		for (let i = 0; i < this.plateau.length ; i++)
		{
			for(let j = 0 ; j < this.plateau[0].length ; j++)
			{
				if(!(this.plateau[i][j] == 15 || this.plateau[i][j] == 0))
				{
					this.ctx.drawImage(imgPiece, (this.plateau[i][j]-1) * 80, 0, 80, 80, (i-1)*87.5, (j-1)*87.5, 87.5, 87.5);
				}
			}
		}

	}

	drawDeplacementsValides(deplacementsValides)
	{
		
		for(let i = 1; i < deplacementsValides.length-1; i++)
		{
			for(let j = 1; j < deplacementsValides[0].length-1; j++)
			{
				if(deplacementsValides[i][j] == 1) 
				{
					this.ctx.beginPath();
					
					this.ctx.arc((i-1) * 87.5 + 42.5, (j-1) * 87.5 + 42.5, 40, 0, Math.PI * 2);
			
					this.ctx.fillStyle = 'red';
			
					this.ctx.fill();
			
					this.ctx.closePath();
				}
			}
		}
	}
}



