class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = prices[0];

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) minPrice = prices[i];

            const currentProfit = prices[i] - minPrice;

            if (maxProfit < currentProfit) {
                maxProfit = currentProfit;
            } 
        }

        return maxProfit;
    }
}
