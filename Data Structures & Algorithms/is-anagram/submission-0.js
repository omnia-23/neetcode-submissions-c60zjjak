class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let newS = s.split("").sort()
        let newT = t.split("").sort()
        if (newS.length !== newT.length) return false;

        for (let i = 0; i < newS.length; i++) {
            if (newS[i] !== newT[i]) {
                return false;
            }
        }

        return true
    }
}
