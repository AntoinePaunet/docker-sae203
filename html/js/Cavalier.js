export default class Cavalier extends Piece 
{
	constructor(lig, col, num) {super(lig, col, num)}

	deplacementValide(ligDest, colDest) 
	{
		return (Math.abs(ligDest-this._lig) == 2 && Math.abs(colDest-this._col) == 1) 
			|| (Math.abs(ligDest-this._lig) == 1 && Math.abs(colDest-this._col) == 2);
	}
}