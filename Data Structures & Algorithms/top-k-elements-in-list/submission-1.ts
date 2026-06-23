class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const ranking = new Array(nums.length + 1).fill(null).map((x) => []);

        const frequencia = {};
        for (let i = 0; i < nums.length; i++) {
            if (frequencia[nums[i]] === undefined) {
                frequencia[nums[i]] = 1;
            } else {
                frequencia[nums[i]] += 1;
            }
        }

        for (const [key, quantasVezesApareceu] of Object.entries(frequencia) as [
            string,
            number,
        ][]) {
            ranking[quantasVezesApareceu].push(key);
        }

        const filtered = [];
        for (let i = 0; i < ranking.length; i++) {
            if (ranking[i].length > 0) {
                filtered.push(ranking[i]);
            }
        }

        const result = [];
        console.log(filtered)
        for (let i = filtered.length - 1; i >= 0; i--) {
            for (let j = filtered[i].length -1; j >= 0; j--) {
                result.push(filtered[i][j]);

                if (result.length === k) {
                    return result;
                }
            }
        }
        return result;
    }
}
