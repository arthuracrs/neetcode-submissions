class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = []
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {   
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const currentCombination = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
                        
                        // verifica se já existe no resultado
                        const alreadyExists = result.some(
                            tripla => tripla[0] === currentCombination[0] &&
                                      tripla[1] === currentCombination[1] &&
                                      tripla[2] === currentCombination[2]
                        )
                        
                        if (!alreadyExists) {
                            result.push(currentCombination)
                        }
                    }
                }
            }
        }

        return result
    }
}