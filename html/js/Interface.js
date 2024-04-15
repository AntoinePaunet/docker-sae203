export default class Interface
{
	constructor(ctx, plateau)
	{
		this.ctx = ctx;
		this.plateau = plateau;
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
				if(!this.plateau[i][j] == 15 && !this.plateau[i][j] == 0)
				{
					ctx.drawImage(imgPiece, this.plateau[i][j] * 80, 0, 80, 80, i, j, 80, 80);
				}
			}
		}
	}
}



