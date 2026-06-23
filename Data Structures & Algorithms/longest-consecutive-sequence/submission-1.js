class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const setNums = new Set(nums);

        let maximoSequencia = 0;

        for (let i = 0; i < nums.length; i++) {
            let sequenciaAtual = 0
            while(setNums.has(nums[i] + sequenciaAtual)) {
                sequenciaAtual++
            }

            if(sequenciaAtual> maximoSequencia) maximoSequencia = sequenciaAtual
        }

        return maximoSequencia
    }
}
