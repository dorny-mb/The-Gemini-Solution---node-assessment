/**
 * @param {number[]} nums
 * @return {number[]}
 */

export const duplicateZeroes = (nums:Array<number>) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            for (let j = nums.length - 1; j > i; j--) {
                nums[j] = nums[j-1];
            }
        }
    }

    return nums
}
