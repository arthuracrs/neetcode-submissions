class Solution {
    mapLetras = {
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
        1: 26
    }

    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false
        
        const counter = new Array(26).fill(0)
        
        for(let i = 0; i < s.length; i ++){
            counter[this.mapLetras[s[i]]]++
            counter[this.mapLetras[t[i]]]--
        }

        return counter.every((x) => x == 0)
    }
}
