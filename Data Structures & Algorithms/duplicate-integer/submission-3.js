class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const map = new Map()
    for (const x of nums) {
      const count = map.get(x) ?? 0
      if (count + 1 > 1)
        return true
      else {
        map.set(x, count + 1)
      }

    }
    return false

  }
}
