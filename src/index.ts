
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


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/valid-anagram/description/

function isAnagram(s: string, t: string): boolean {
    interface Tracker {
        [props: string]: number
    }
    const tracker: Tracker = {}

    if(s.length !== t.length) return false

    for(let i = 0; i < s.length; i++) {
        if(tracker[s[i]] === undefined) {
            tracker[s[i]] = 1
        } else {
            tracker[s[i]]++
        }
    }

    for(let i = 0; i < t.length; i++) {
        if(tracker[t[i]] === undefined) {
            return false
        } else {
            tracker[t[i]]--
            if(tracker[t[i]] < 0) return false
        }
    }

    return true

};
