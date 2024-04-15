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


		let imgPiece = new Image();
		imgPiece.src = "../images/pieces.png"

		for (let i = 0; i < this.plateau.length ; i++)
		{
			for(let j = 0 ; j < this.plateau[0].length ; j++)
			{
				if(!(this.plateau[i][j] == 15 || this.plateau[i][j] == 0))
				{
					if(this.classPlateau.getPiece(i, j) != null && this.classPlateau.getPiece(i,j).selectionner)
					{
						this.ctx.beginPath();

						console.log(this.classPlateau.getPieceTest(i, j).lig, (this.classPlateau.getPieceTest(i, j).col))

						this.ctx.arc((this.classPlateau.getPiece(i, j).lig * 87.5) + 42.5, (this.classPlateau.getPiece(i, j).col * 87.5) + 42.5, 40, 0, Math.PI * 2);
				
						this.ctx.fillStyle = 'green';
				
						this.ctx.fill();
				
						this.ctx.closePath();
					}
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
				if(deplacementsValides[i][j] = 1) 
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



