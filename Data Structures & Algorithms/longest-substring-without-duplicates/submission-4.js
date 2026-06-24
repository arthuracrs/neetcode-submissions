class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(a) {
        const s = a;
        const isUniqueChars = (s) => {
            const set = new Set(s);
            return set.size == s.length;
        };

        let left = 0;
        let right = 0;
        let maxLength = 0;

        while (right < s.length) {
            const kk = s.slice(left, right+1);
            if (isUniqueChars(kk)) {
                console.log("kk is unique: " + kk);
                right++;
                if (maxLength < right - left) maxLength = right - left;
                console.log(maxLength);
            } else {
                left++;
            }
        }

        return maxLength;
    }
}
