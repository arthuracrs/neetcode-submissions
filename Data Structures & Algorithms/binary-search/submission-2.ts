class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    binarySearch(nums: number[], target: number, left: number, right: number): number {
        if (right < left) {
            return -1;
        }

        const midpoint = Math.floor(right + left / 2);

        if (nums[midpoint] == target) {
            return midpoint;
        }

        if (target < nums[midpoint]) {
            return this.binarySearch(nums, target, left, midpoint - 1);
        }

        return this.binarySearch(nums, target, midpoint + 1, right);
    }

    search(nums: number[], target: number): number {
        return this.binarySearch(nums, target, 0, nums.length - 1);
    }
}
