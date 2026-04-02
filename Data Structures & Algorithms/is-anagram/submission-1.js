class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let newS = s.split("").sort().join("")
        let newT = t.split("").sort().join("")
        if (newS.length !== newT.length) return false;

        // for (let i = 0; i < newS.length; i++) {
        if (newS !== newT) {
            return false;
        }
        // }

        return true
    }
}
