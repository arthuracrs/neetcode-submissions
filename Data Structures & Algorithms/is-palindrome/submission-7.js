class Solution {
    eNumeroOuLetra(input) {
        const string = input.toLowerCase()
        if ((string >= "a" && string <= "z") || (string >= '0' && string <= '9')) {
            return true;
        }

        return false;
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let inicio = 0;
        let final = s.length - 1;
        while (inicio < final) {
            console.log('inicio while:' + s[inicio], s[final])
            if (this.eNumeroOuLetra(s[inicio]) && this.eNumeroOuLetra(s[final])) {
                console.log(s[inicio], s[final])
                if (s[inicio].toLowerCase() !== s[final].toLowerCase()) return false;
                inicio++;
                final--;
            } else if (!this.eNumeroOuLetra(s[inicio])) {
                inicio++;
            } else if (!this.eNumeroOuLetra(s[final])) {
                final--;
            }
        }

        return true;
    }
}
