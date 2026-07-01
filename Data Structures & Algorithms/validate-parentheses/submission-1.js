class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const mapper = {
            ')':'(',
             ']':'[',
            '}':'{',
        }
        for (let i = 0; i < s.length; i++) {
            if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
                stack.push(s[i]);
            }
            if (s[i] == ")" || s[i] == "]" || s[i] == "}") {
                if (stack[stack.length -1] != mapper[s[i]]) return false

                stack.pop()
            }
        }

        if (stack.length > 0) return false;

        return true
    }
}
