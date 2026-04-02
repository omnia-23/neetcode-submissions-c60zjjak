class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const arr = []
        const visited = new Set() // keep track of strings already grouped

        for (let i = 0; i < strs.length; i++) {
            if (visited.has(strs[i])) continue // skip already grouped

            const subArr = [strs[i]] // start with current string
            visited.add(strs[i])

            for (let j = i + 1; j < strs.length; j++) {
                if (this.isAnagram(strs[i], strs[j])) {
                    subArr.push(strs[j])
                    visited.add(strs[j])
                }
            }

            arr.push(subArr)
        }

        return arr
    }

    isAnagram = (s, t) => {
        let newS = s.split("").sort();
        let newT = t.split("").sort();
        if (newS.length !== newT.length) return false;

        for (let i = 0; i < newS.length; i++) {
            if (newS[i] !== newT[i]) {
                return false;
            }
        }

        return true;
    };
}
