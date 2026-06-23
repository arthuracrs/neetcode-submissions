class Solution {
    encode(strs: string[]): string {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    decode(s: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < s.length) {
            let j = i;

            // encontra o '#'
            while (s[j] !== "#") {
                j++;
            }

            const len = parseInt(s.substring(i, j));
            const str = s.substring(j + 1, j + 1 + len);

            result.push(str);

            i = j + 1 + len;
        }

        return result;
    }
}