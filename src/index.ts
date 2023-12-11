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

// https://leetcode.com/problems/repeated-substring-pattern/description/


function repeatedSubstringPattern(s: string): boolean {
  let sub: string = '' // repeatable units (the substring)
  let copiesOfSubstring: string = '' // the substring being built for comparison

  for(let i = 0; i < s.length; i++) {
      sub = s.slice(0, i + 1)
      if(sub === s) return false // if the substring has become the original input, return false (no valid substring exists)

      while(copiesOfSubstring.length < s.length) {
          copiesOfSubstring += sub   // make copies of the substring and add them together
          if(copiesOfSubstring === s) return true
      }
      copiesOfSubstring = '' // reset for next iteration
  }

  return false
};


// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/add-strings/submissions/

interface stringInt {
  [props: string]: number
}

function addStrings(num1: string, num2: string): string {
  const ans: number[] = []
  const stringToInt: stringInt = {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9
  }

  const longestLen: number = Math.max(num1.length, num2.length)  // pad for comparison and make remainder logic smooth
  if(longestLen === num1.length) {
      while(num2.length !== num1.length) num2 = '0' + num2
  } else {
      while(num1.length !== num2.length) num1 = '0' + num1
  }


  let i: number = (longestLen - 1)
  let rem: number | null = null

  while( num1[i] && num2[i] ) {
      const number1: number = stringToInt[num1[i]]
      const number2: number = stringToInt[num2[i]]
      let sum: number = number1 + number2

      if(rem !== null) { // if remainder exists, add to sum, then set to null
          sum += rem
          rem = null
      }

      if(sum > 9) {
          const sumString = sum.toString()
          rem = stringToInt[sumString[0]] // set remainder (carry the 1)
          ans.push( stringToInt[sumString[1]] )
      } else {
          ans.push(sum)
      }

      i--

  }

  if(rem) ans.push(rem) // if done with loop, but a remainder still exists, add to result array
  return ans.reverse().join('')

};
