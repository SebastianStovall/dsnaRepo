// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]


var sortColors = function(nums) {

    for(let i = nums.length - 1; i > 0; i--) {

        for(let j = 0; j <= i-1; j++) {

            if(nums[j] > nums[j + 1]) {
                let second = nums[j + 1]
                nums[j + 1] = nums[j]
                nums[j] = second
            }
        }

    }

};


//-------------------------------------------------------------------------------------------------------------------------------------------------------------//



// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

var setZeroes = function(matrix) {

    let arrsWithZero = []
    let positionOfZeros = []

    // Loop declration will handle which arr's have 0s, and the index position of them
    // we can use this for two things:
    // 1.) zero out any arr's that contain a 0
    // 2.) if no zeros present in that sub array, then 0 out where the position of the 0 was found in

    for(let i = 0; i < matrix.length; i++) {
        let arr = matrix[i]

        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === 0) {
                arrsWithZero.push(i)
                positionOfZeros.push(j)
            }
        }
    }

    if(arrsWithZero.length === 0) return matrix
    for(let i = 0; i < arrsWithZero.length; i ++) {
        let indexOfArr = arrsWithZero[i]
        for(let j = 0; j < matrix[indexOfArr].length; j++) {
            // console.log("LOOK HERE", matrix[indexOfArr][j])
            matrix[indexOfArr][j] = 0
        }
    }

    for(let i = 0; i < positionOfZeros.length; i++) {
        let indexPosition = positionOfZeros[i]
        for(let j = 0; j < matrix.length; j++) {
            let arr = matrix[j]
            arr[indexPosition] = 0
        }
    }

};


//-------------------------------------------------------------------------------------------------------------------------------------------------------------//


// https://i.gyazo.com/4ad6b7da98307bd2e01f714fda31cbcd.png

function getLargestNumber(num) {
    // Write your code here
    // try a bubble sort where the swap condition is if i and i+1 are both odd or even can swap, and swap if i + 1 is larger than i

    const isEven = (num) => {
        if(num % 2 === 0) return true
        return false
    }

    const isOdd = (num) => {
        if(num % 2 !== 0) return true
        return false
    }

    let numArr = num.split("")
    for(let i = numArr.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(isEven(numArr[j]) && isEven(numArr[j+1])) {
                // console.log("OK")
                if(numArr[j+1] > numArr[j]) {
                    let second = numArr[j+1]
                    numArr[j+1] = numArr[j]
                    numArr[j] = second
                }
            } else if(isOdd(numArr[j]) && isOdd(numArr[j+1])) {
                // console.log("OK 2")
                if(numArr[j+1] > numArr[j]) {
                    let second = numArr[j+1]
                    numArr[j+1] = numArr[j]
                    numArr[j] = second
                }
            }
        }
    }

    return numArr.join("")

}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------//

// https://i.gyazo.com/967fcafe45d88112c074d2c9b20cb3a7.png

function maxEnergy(mat) {

    let consumption = 100
    for(let i = 0; i < 2; i++) {

        let currConsumption = Infinity

        let subArr = mat[i]
        for(let j = 0; j < subArr.length; j++) {
            // directly down
            if(subArr[j] + mat[i + 1][j] < currConsumption) currConsumption = ( subArr[j] + mat[i + 1][j] )
            // left
            if(mat[i + 1][j - 1]) {
                if(subArr[j] + mat[i + 1][j - 1] < currConsumption) currConsumption = ( subArr[j] + mat[i + 1][j - 1] )
            }
            // right
            if(mat[i + 1][j + 1]) {
                if(subArr[j] + mat[i + 1][j + 1] < currConsumption) currConsumption = ( subArr[j] + mat[i + 1][j + 1] )
            }
        }
        consumption -= currConsumption

    }

    return consumption

}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// /* Heaps */

// // left child: i * 2 + 1
// // right child: i * 2 + 2
// // parent: Math.floor((i - 1) / 2)


function insertMinHeap(arr, value) {
    arr.push(value); // push the value onto the heap

    let i = arr.length - 1; // start the index pointer at the end of the heap (to represent the idx and value of the insertion node)

    while (i > 0 && arr[i] < arr[Math.floor((i - 1) / 2)]) { // while idx pointer is not the root node (if root node, no swaps possible... tree/heap is sorted) and the insertion node is LESS THAN parent node...
        let parentIndex = Math.floor((i - 1) / 2); // this equation is the same one used in while condition, it represents the index of the parent node

        [arr[i], arr[parentIndex]] = [arr[parentIndex], arr[i]]; // Swap with insertion node with the parent node (make your way up the tree to determine where insertion node is placed)
        i = parentIndex; // set up the new index of the insertion node to become the parent idx so its ready for the next iteration in the loop
    }
}

  // Example usage:
  const minHeap = [];
  insertMinHeap(minHeap, 5);
  insertMinHeap(minHeap, 3);
  insertMinHeap(minHeap, 8);
  insertMinHeap(minHeap, 1);

//   console.log(minHeap); // Output: [1, 3, 8, 5]

  insertMinHeap(minHeap, 2)
  insertMinHeap(minHeap, 50)
  insertMinHeap(minHeap, 7)
  insertMinHeap(minHeap, 6)

//   console.log(minHeap); // Output: [1, 2, 7, 5, 3, 50, 8, 6]





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function deleteMinFromHeap(arr) {

    if (arr.length === 0) {
      return null; // Heap is empty
    }

    if (arr.length === 1) {
      return arr.pop(); // If there's only one element, simply remove and return it
    }


    const minValue = arr[0]; // The minimum value is at the root, CAN ONLY REMOVE ROOT ELEMENT IN A HEAP
    arr[0] = arr.pop(); // Replace the root with the last element, then move down the tree to find where to place by swapping with smallest child each iteration until parent is smaller than both children

    let i = 0; // start idx pointer at root at work way down tree

    while (true) {
      let smallest = i; // declare a smallest pointer to see if idx got swapped, if so, the loop will continue down the tree to make more swaps (on first iteration, idx pointer = position of target node)
                        // on the next iterations, it will represent the position of the child we swapped with. continue until this pointer doesn't get re-assigned on an iteration (placement found)
      const leftChild = 2 * i + 1; // equation to find leftChild from parent idx pointer
      const rightChild = 2 * i + 2; // equation to find rightChild from parent idx pointer

      if (leftChild < arr.length && arr[leftChild] < arr[smallest]) { // if the left child is present in the tree, and leftChild is less < smallest idx, we will change smallest to be the idx pointer of leftChild
        smallest = leftChild;
      }

      if (rightChild < arr.length && arr[rightChild] < arr[smallest]) { // if the right child is present in the tree, and rightChild is < than smallest idx, we will change smallest to be the idx pointer of rightChild
        smallest = rightChild;
      }

      if (smallest !== i) { // see if idx pointers are different on this iteration (if true, a swap will be made)
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; // Swap the elements
        i = smallest; // set the i pointer to smallest (the idx pointer of the child node that we swapped with)
      } else {
        break; // if the idx pointers are the same, a swap does not need to be made, and the tree is sorted, so we can break from the loop
      }
    }

    return minValue;
  }

  // Example usage:
  const minHeap2 = [];
  insertMinHeap(minHeap2, 5);
  insertMinHeap(minHeap2, 3);
  insertMinHeap(minHeap2, 8);
  insertMinHeap(minHeap2, 1);
  insertMinHeap(minHeap2, 2);
  insertMinHeap(minHeap2, 50);
  insertMinHeap(minHeap2, 7);
  insertMinHeap(minHeap2, 6);

//   console.log(" STARTING HEAP --->", minHeap2); // Output: [1, 2, 7, 5, 3, 50, 8, 6]

  const minVal = deleteMinFromHeap(minHeap2);
//   console.log(" DELETE THE 1 (ROOT VAL) OF HEAP --->", minHeap2); // Output: [3, 5, 8]
//   console.log("Deleted Min Value:", minVal); // Output: Deleted Min Value: 1



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// https://i.gyazo.com/d8be670e2fd8b6175d9a0f07789c5980.png


var SeatManager = function(n) {
    this.seats = n

    const seatArr = []
    for(let i = 1; i <= this.seats; i++) {
      seatArr.push([i])
    }
    this.seatArr = seatArr
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
  if(this.seatArr.length === 0) return null;
  if(this.seatArr.length === 1) return this.seatArr.pop()[0]

  const minVal = this.seatArr[0][0]
  this.seatArr[0] = this.seatArr.pop()

  let i = 0;

  while(true) {
    let smallest = i

    const leftChild = 2 * i + 1
    const rightChild = 2 * i + 2

    if(rightChild < this.seatArr.length && this.seatArr[rightChild][0] < this.seatArr[smallest][0]) {
      smallest = rightChild
    }

    if(leftChild < this.seatArr.length && this.seatArr[leftChild][0] < this.seatArr[smallest][0]) {
      smallest = leftChild
    }

    if(smallest !== i) {
      [ this.seatArr[i], this.seatArr[smallest] ] = [ this.seatArr[smallest], this.seatArr[i] ]
      i = smallest
    } else {
      break;
    }

  }

  return minVal;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
  this.seatArr.push([seatNumber])
  let i = this.seatArr.length - 1

  while( i > 0 && this.seatArr[i][0] < this.seatArr[Math.floor((i - 1) / 2)][0] ) {
    [ this.seatArr[i], this.seatArr[Math.floor((i - 1) / 2)] ] = [ this.seatArr[Math.floor((i - 1) / 2)], this.seatArr[i] ]
    i = Math.floor((i - 1) / 2)
  }

};



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://i.gyazo.com/ee32368d115f6798436c1fbfdf66f0e3.png


/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.nums = nums
};

// const obj1 = new KthLargest(10, [2,3,4,5,6])
// console.log("TEST", obj1)

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {

    this.nums.push(val)
    const sortedNums = this.nums.sort((a,b) => b - a)

    // console.log(sortedNums)
    return sortedNums[this.k - 1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
