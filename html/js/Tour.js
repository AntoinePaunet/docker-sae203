export default class Tour extends Piece
{
    constructor(lig, col, num) {super(lig,col,num)}

    déplacementValide(ligDest, colDest)
    {
        return ligDest==this._lig || colDest==this._col;
    }
}