class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let i = 0; i < strs.length; i++) {
            encoded += strs[i].length + "$" + strs[i];
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;

            while (str[j] != "$") {
                j++;
            }

            const tamanhoDaPalavra = Number(str.slice(i,j));

            const palavra = str.slice(j + 1, tamanhoDaPalavra + j + 1);

            result.push(palavra);

            i = j + 1 + tamanhoDaPalavra;
        }

        return result;
    }
}
