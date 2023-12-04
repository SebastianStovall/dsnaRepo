
// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {

    interface Tracker {
        [prop: string]: number
    }

    const tracker: Tracker = {}

    for(let i = 0; i < nums.length; i++) {
        if(tracker[ nums[i] ] === undefined) {
            tracker[ nums[i] ] = nums[i]
        } else {
            return true
        }
    }
    return false
};


const nums = [0,4,5,0,3,6]
console.log(containsDuplicate(nums))
