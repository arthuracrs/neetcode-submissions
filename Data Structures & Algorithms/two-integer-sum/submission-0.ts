class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = {};
        // target = 9, lista: 3,4,5,6

        for (let i = 0; i < nums.length; i++) {
            const complemento = target - nums[i];

            if (seen[complemento] !== undefined) {
                return [i, seen[complemento]];
            }

            seen[nums[i]] = i
        }
    }
}

