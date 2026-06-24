class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let right = heights.length -1
        let left = 0
        let maxArea = 0
        
        while(left < right) {
            let width = right - left
            let newArea = width * Math.min(heights[right], heights[left])

            console.log(newArea)
            if(newArea>maxArea){
                maxArea = newArea
            }

            if(heights[left]< heights[right]){
                left++
            }else{
                right--
            }
        }

        return maxArea
    }
}
