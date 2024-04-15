export default class Interface
{
	constructor(ctx, plateau)
	{
		this.ctx = ctx;
		this.plateau = plateau;
		this.imgPieces = '../images/pieces.png';
	}

	drawMap()
	{
		this.ctx.clearRect(0, 0, 700, 700)

		for (let i = 0; i < this.plateau.length ; i++)
		{
			for(let j = 0 ; j < this.plateau[0].length ; j++)
			{
				if(!(this.plateau[i][j] == 15 || this.plateau[i][j] == 0))
				{
					console.log("Hello world !")
					this.ctx.drawImage
					(
						this.imgPieces, 
						this.plateau[i][j] * 80, 0, 80, 80, 
						i, j, 80, 80
					);
				}
			}
		}
	}
}



