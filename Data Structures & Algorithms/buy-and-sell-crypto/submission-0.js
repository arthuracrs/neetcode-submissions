class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0

        for(let i = 0; i < prices.length; i++){
            let j = i+1
            while(j < prices.length) {
                const currentProfit = prices[j] - prices[i]
                if(maxProfit< currentProfit) {
                    maxProfit = currentProfit
                }

                j++
            }
        }

        return maxProfit
    }
}
