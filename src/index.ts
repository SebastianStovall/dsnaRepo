// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
  interface Tracker {
    [prop: string]: number;
  }

  const tracker: Tracker = {};

  for (let i = 0; i < nums.length; i++) {
    if (tracker[nums[i]] === undefined) {
      tracker[nums[i]] = nums[i];
    } else {
      return true;
    }
  }
  return false;
}

const nums = [0, 4, 5, 0, 3, 6];
console.log(containsDuplicate(nums));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/valid-anagram/description/

function isAnagram(s: string, t: string): boolean {
  interface Tracker {
    [props: string]: number;
  }
  const tracker: Tracker = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (tracker[s[i]] === undefined) {
      tracker[s[i]] = 1;
    } else {
      tracker[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (tracker[t[i]] === undefined) {
      return false;
    } else {
      tracker[t[i]]--;
      if (tracker[t[i]] < 0) return false;
    }
  }

  return true;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/ugly-number/description/

function isUgly(n: number): boolean {
  if (n <= 0) return false; // n must be a postive integer to be considered

  while (n % 2 === 0) {
    // keep dividing by the prime divisors until no longer divisible
    n /= 2;
  }

  while (n % 3 === 0) {
    // keep dividing by the prime divisors until no longer divisible
    n /= 3;
  }

  while (n % 5 === 0) {
    // keep dividing by the prime divisors until no longer divisible
    n /= 5;
  }

  return n === 1; // by this point, if n is not 1, then another factor must exist in order to fully simplify n... the fact that we were dividing by    prime factors ensures that the mystery factor would need to be prime
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/implement-queue-using-stacks/description/

class MyQueue {
  constructor(public stack: number[] = []) {}

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    return this.stack.shift()!;
  }

  peek(): number {
    return this.stack[0];
  }

  empty(): boolean {
    return this.stack.length === 0;
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //


// https://leetcode.com/problems/first-bad-version/submissions/

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left: number = 0;
    let right: number = n + 1;
    let ans: number = 0;
    let flag: boolean = true;

    while (flag) {
      const midPoint = Math.floor((right + left) / 2);
      const isBad = isBadVersion(midPoint);

      if (isBad) {
        // if bad (if true)

        if (isBadVersion(midPoint - 1) === false) {
          ans = midPoint;
          flag = false;
        }
        right = midPoint - 1;
      } else {
        // if good (if false)

        if (isBadVersion(midPoint + 1)) {
          ans = midPoint + 1;
          flag = false;
        }
        left = midPoint + 1; // we know that the call to the right of the midpoint is still good, and in order to find bad, we search farther right
      }
    }
    return ans;
  };
};


// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //
