/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {number[]}
 */

export const mergeSortedArray = (nums1:Array<number>, m:number, nums2: Array<number>, n:number) => {
    for(let i = 0; i < n; i++) {
       nums1[m + i] = nums2[i];
    }
    return nums1.sort((a, b) => a - b);
}