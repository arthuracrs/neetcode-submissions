class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const mapAlfabeto = {
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11,
            m: 12,
            n: 13,
            o: 14,
            p: 15,
            q: 16,
            r: 17,
            s: 18,
            t: 19,
            u: 20,
            v: 21,
            w: 22,
            x: 23,
            y: 24,
            z: 25,
        };

        const osAnagramas = {};

        for (let i = 0; i < strs.length; i++) {
            const counter = new Array(26).fill(0);

            const arrayDaString = strs[i].split("");
            for (let j = 0; j < arrayDaString.length; j++) {
                counter[mapAlfabeto[arrayDaString[j]]] += 1;
            }
            const anagramId = counter.join("#")
            if (osAnagramas[anagramId] === undefined) {
                osAnagramas[anagramId] = [];
            }

            osAnagramas[anagramId].push(strs[i])
        }

        return Object.values(osAnagramas)
    }
}
