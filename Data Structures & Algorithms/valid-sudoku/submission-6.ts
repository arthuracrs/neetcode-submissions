class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board: string[][]): boolean {
        const linhas = new Array(board.length).fill(null).map(() => new Set());
        const colunas = new Array(board.length).fill(null).map(() => new Set());
        const conjutos = new Array(board.length).fill(null).map(() => new Set());

        const getConjuntoId = (l, c) => {
            const linha = Math.floor(l / 3);
            const coluna = Math.floor(c / 3);

            return linha * 3 + coluna;
        };

        for (let l = 0; l < (board.length); l++) {
            for (let c = 0; c < (board.length); c++) {
                const celula = board[l][c];

                if (celula == ".") continue;

                const conjuntoId = getConjuntoId(l, c);

                if (
                    linhas[l].has(celula) ||
                    colunas[c].has(celula) ||
                    conjutos[conjuntoId].has(celula)
                ) {
                    return false;
                }

                linhas[l].add(celula);
                colunas[c].add(celula);
                conjutos[conjuntoId].add(celula);
            }
        }

        return true;
    }
}
