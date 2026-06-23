class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board: string[][]): boolean {
        const arrayValido = (array) => {
            const arrayFiltrado = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i] !== ".") arrayFiltrado.push(array[i]);
            }

            const unicosDoArray = new Set(arrayFiltrado);

            return unicosDoArray.size === arrayFiltrado.length;
        };

        const linhas = new Array(9).fill(null).map(()=> []);
        const colunas = new Array(9).fill(null).map(()=> []);
        const conjutos = {};

        const getConjuntoId = (l, c) => {
            const linha = Math.floor(l / 3);
            const coluna = Math.floor(c / 3);

            return `${linha},${coluna}`;
        };

        for (let l = 0; l < 9; l++) {
            for (let c = 0; c < 9; c++) {
                const conjuntoId = getConjuntoId(l, c);
                console.log(conjuntoId)
                if (conjutos[conjuntoId] === undefined) {
                    conjutos[conjuntoId] = [];
                }
                console.log(linhas[l])
                console.log(colunas[c])
                console.log(conjutos[conjuntoId])

                linhas[l].push(board[l][c]);
                colunas[c].push(board[l][c]);
                conjutos[conjuntoId].push(board[l][c]);
             console.log("==========")
             console.log(linhas[l])
                console.log(colunas[c])
                console.log(conjutos[conjuntoId])
                if (!arrayValido(linhas[l])) return false;
                if (!arrayValido(colunas[c])) return false;
                if (!arrayValido(conjutos[conjuntoId])) return false;


            }
        }

        return true;
    }
}
