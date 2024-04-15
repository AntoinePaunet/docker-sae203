export default class Fou extends Piece 
{
	constructor(lig, col, num) {super(lig, col, num)}

	deplacementValide(ligDest, colDest) 
	{
		return Math.abs(ligDest-this._lig) == Math.abs(colDest-this._col);
	}
}