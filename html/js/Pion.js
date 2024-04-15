export default class Pion extends Piece
{
<<<<<<< HEAD
    constructor(lig, col, num) {super(lig,col,num)}

    déplacementValide(ligDest, colDest)
    {
        return Math.abs(ligDest-this._lig) == 1 && Math.abs(colDest-this._col) == 1;
    }
=======
	constructor(lig, col, num) {super(lig, col, num);}

	deplacementValide(ligDest, colDest)
	{
		return Math.abs(ligDest-this._lig) == 1 && Math.abs(colDest-this._col) == 1;
	}
>>>>>>> 9dbae2950b93a8390e24156a64e70f8e219cb818
}