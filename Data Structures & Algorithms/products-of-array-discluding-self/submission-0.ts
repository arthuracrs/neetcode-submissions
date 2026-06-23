class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const resultado = new Array(nums.length).fill(1);

        let multiplicadorDireita = 1;
        for (let i = 0; i < nums.length; i++) {

            resultado[i] = resultado[i] * multiplicadorDireita;
            multiplicadorDireita = multiplicadorDireita * nums[i];
        }
        console.log(resultado)
        let multiplicadorEsquerda = 1;
        for (let i = nums.length -1; i >= 0; i--) {
            resultado[i] = resultado[i] *  multiplicadorEsquerda;
            multiplicadorEsquerda = multiplicadorEsquerda * nums[i];
        }

        return resultado
    }
}
