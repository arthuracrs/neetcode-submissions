class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const complementos = new Map();
        for (let i = 0; i < numbers.length; i++) {
            const valorDoComplemento = target - numbers[i];
            complementos[numbers[i]] = i;

            if (
                complementos[valorDoComplemento] !== undefined &&
                complementos[valorDoComplemento] !== i
            ) {
                if (valorDoComplemento + numbers[i] == target) {
                    return [complementos[valorDoComplemento] + 1, i + 1];
                }
            }
        }
    }
}
