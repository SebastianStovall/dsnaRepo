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


