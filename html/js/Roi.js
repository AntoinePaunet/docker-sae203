export default class Roi extends Piece
{
    constructor(lig, col, num) {super(lig,col,num)}

    déplacementValide(ligDest, colDest)
    {
        return Math.abs(ligDest-this.lig) <= 1 && Math.abs(colDest-this.col) <= 1;
    }
}