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
