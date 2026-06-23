class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const alreadyPresent = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (alreadyPresent.has(nums[i])) {
                return true;
            } else {
                alreadyPresent.add(nums[i]);
            }
        }

        return false
    }
}
