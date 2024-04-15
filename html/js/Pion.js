export default class Pion extends Piece
{
    constructor(lig, col, num) {super(lig,col,num)}

    déplacementValide(ligDest, colDest)
    {
        return Math.abs(ligDest-this._lig) == 1 && Math.abs(colDest-this._col) == 1;
    }
}