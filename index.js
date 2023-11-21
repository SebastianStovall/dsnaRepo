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




function permute(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  const firstElement = arr[0];
  const restOfArray = arr.slice(1);

  const permutationsWithoutFirst = permute(restOfArray); // ask yourself, what is the return of permutate([2,3]) call? ---> callstacks = [3] and [], which generate [[2,3], [3,2]] (these permutes get used in our loop)
                                                                              // permute([]) = []...   permute[3] = [[3]]...    so call to permute([2,3]) = [[2,3], [3,2]]
                                                        // take the value of permute[2,3] and use it to solve permute[1,2,3] is what is happening here
  const allPermutations = [];

  for (const smallerPermutation of permutationsWithoutFirst) {
    for (let i = 0; i <= smallerPermutation.length; i++) { // iterates through each element of smaller permutation ALL THE WAY UP TO LENGTH (so if perm = [2,3], 3 iterations ---> i = 0, i = 1, i = 2)
      const permutation = [...smallerPermutation.slice(0, i), firstElement, ...smallerPermutation.slice(i)];
      allPermutations.push(permutation);
    }
  }

  return allPermutations;
}

const array = [2,3];
const result = permute(array);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var maxAreaOfIsland = function(grid) {

  let count = 0;
  let maxIsland = 0;

  let visited = new Set()

  for(let r = 0; r < grid.length; r++) {
      const row = grid[r]
      for(let c = 0; c < row.length; c++) {
          const ele = row[c]
          if(ele === 1) {
              let coords = [r,c]
              visited.add(coords.toString())
              const queue = [coords]

              while(queue.length >= 1) {

                  const curr = queue.shift()
                  const [row, col] = curr
                  count++

                  const neighbors = getNeighbors(grid, row, col)
                  for(let neighbor of neighbors) {
                      if(!visited.has(neighbor.toString())) {
                          visited.add(neighbor.toString())
                          queue.push(neighbor)
                      }
                  }
              }

              if(count > maxIsland) {
                  maxIsland = count
                  count = 0
              } else {
                  count = 0
              }

          }
      }
  }
  return maxIsland
};



function getNeighbors(matrix, row, col) {
  // up down left right only
  const neighbors = []

  if( row < matrix.length - 1 && matrix[row + 1][col] === 1) {
      neighbors.push([row + 1, col])
  }

  if( row > 0 && matrix[row - 1][col] === 1) {
      neighbors.push([row - 1, col])
  }

  if( col > 0 && matrix[row][col - 1] === 1) {
      neighbors.push([row, col - 1])
  }

  if( col < matrix[0].length - 1 && matrix[row][col + 1] === 1) {
      neighbors.push([row, col + 1])
  }

  return neighbors
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// var pacificAtlantic = function(heights) {
//   // divide the matrix in half
//   // half1 = Pacific Ocean
//   // half 2 = Atlantic Ocean

//   // return squares that touch have touched both oceans by the time they have completed there flow
//   // a square can flow into another square if that square is up,down,left,right of it and is LESS THAN OR EQUAL TO THE SQUARE
//   // if a square is on a border, it must cross to the other side, JUST BECAUSE ITS ON A BORDER DOESNT MEAN ITS TRAVELED BOTH OCEANS

//   // PSEUDOCODE

//   // traverse each square and perform DFT on the square to determine if the flow touches both oceans
//   // find all neighbors that meet water level criteria of the current square your looking at
//   // if the flow has touched both oceans, add the coordinates to a result array

//   // to determine the border ----> find the midpoint of the matrix, then keep going UP and RIGHT + LEFT and DOWN til you reach
//   // the points of matrix[0] (up and right) AND matrix[matrix.length - 1] (down and left)
//   // use the coordinates of the border to determine if the flow has crossed oceans
//   // reference the coordinates for the current square, and compare those coordinates to the border coordinates in that same row

//   // numOfSquares = matrix[0].length * matrix.length
//   // to find index of midpoint ---->  Math.floor(numOfSquares / 2)

//   if(heights.length === 1 && heights[0].length === 1) return [[0,0]]

//   let resultCoords = new Set()

//   // Calculate the number of rows and columns
//   const numRows = heights.length;
//   const numColumns = heights[0].length; // Assuming all rows have the same number of columns

//   // Calculate the midpoint index coordinates
//   let rowAtIndex = Math.floor(numRows / 2);
//   let columnAtIndex = Math.floor(numColumns / 2);

//   const borderCoords = [[rowAtIndex, columnAtIndex, "row --->", rowAtIndex]]
//   let rowDecrement = rowAtIndex
//   let columnIncrement = columnAtIndex

//   let rowIncrement = rowAtIndex
//   let columnDecrement = columnAtIndex

//   for(let i = rowAtIndex - 1; i >= 0; i--) {
//     rowDecrement--;
//     columnIncrement++;
//     borderCoords.push([rowDecrement, columnIncrement, "row --->", i])
//   }

//   for(let i = rowAtIndex + 1; i <= heights.length - 1; i++) {
//     rowIncrement++
//     columnDecrement--;
//     borderCoords.push([rowIncrement, columnDecrement, "row --->", i])
//   }

//   for(let r = 0; r < heights.length; r++) {
//     let row = heights[r]
//     for(let c = 0; c < row.length; c++) {

//       let visited = new Set()

//       let startCoords = [r,c]
//       visited.add(startCoords.toString())

//       let stack = [startCoords];
//       let flowPaths = [];

//       let borderValue = borderCoords.find((coords) => coords[3] === r)
//       let borderColValue = borderValue[1]
//       // console.log("CHECK COL VALUE", borderColValue)

//       while(stack.length >= 1) {
//         const curr = stack.pop()
//         const [row, col] = curr

//         const neighbors = getNeighbors(heights, row, col)
//         for(let n of neighbors) {
//           if(!visited.has(n.toString())) {
//             visited.add(n.toString())
//             flowPaths.push(n)
//             stack.push(n)
//           }

//         }
//       }
//       // check border coords only for the startCoords row
//       // if startCoords are left of border ---->  check if any flow path coords have a column value greater than border column
//       // if startCoords are right of border ----> check if any flow path coords have a column value less than border column
//       // if startCoords === border ---> check if any coordinate is adjacent to startCoords in flowPath array
//       for(let coords of flowPaths) {
//         const [row, col] = coords
//         const startColumn = startCoords[1]

//         if(startColumn < borderColValue) {
//           if(col > borderColValue) resultCoords.add(startCoords.toString())
//         }

//         if(startColumn > borderColValue) {
//           if(col < borderColValue) resultCoords.add(startCoords.toString())
//         }

//         if(startColumn === borderColValue) {
//             // const currIndex = ( heights[0].length * r + c );
//             const neighbors = getNeighbors(heights, borderValue[0], borderValue[1])
//             if(neighbors.length !== 0) resultCoords.add(startCoords.toString())
//         }

//       }

//     }

//   }

//   const finalResult = []
//   for(let coord of resultCoords) {
//     const [row, comma, column] = coord
//     finalResult.push([Number(row), Number(column)])
//   }
//   return finalResult
// };


// function getNeighbors(matrix, row, col) {
//   // up down left right only
//   const neighbors = []
//   const waterHeight = matrix[row][col]

//   // down
//   if( row < matrix.length - 1 && matrix[row + 1][col] <= waterHeight) {
//       neighbors.push([row + 1, col])
//   }

//   // up
//   if( row > 0 && matrix[row - 1][col] <= waterHeight) {
//       neighbors.push([row - 1, col])
//   }

//   // left
//   if( col > 0 && matrix[row][col - 1] <= waterHeight) {
//       neighbors.push([row, col - 1])
//   }

//   // right
//   if( col < matrix[0].length - 1 && matrix[row][col + 1] <= waterHeight) {
//       neighbors.push([row, col + 1])
//   }

//   return neighbors
// }


// const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// console.log("LOOOOOOOOOOOK", pacificAtlantic(heights))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// https://i.gyazo.com/f1cfe569b8be2240b753dfcf21cfd1c9.png

var pacificAtlantic = function(heights) {

  const result = []

  for(let r = 0; r < heights.length; r++) {
    let row = heights[r]
    for(let c = 0; c < row.length; c++) {

      let visited = new Set()

      let startCoords = [r,c]
      visited.add(startCoords.toString())

      let stack = [startCoords];

      let touchedAtlBottom = false
      let touchedAtlRight = false
      let touchedPacTop = false
      let touchedPacLeft = false

      while(stack.length >= 1) {
        const curr = stack.pop()
        const [row, col] = curr

        if(row === heights.length - 1) touchedAtlBottom = true
        if(col === heights[0].length - 1) touchedAtlRight = true
        if(row === 0) touchedPacTop = true
        if(col === 0) touchedPacLeft = true

        const neighbors = getNeighbors(heights, row, col)
        for(let n of neighbors) {
          if(!visited.has(n.toString())) {
            visited.add(n.toString())
            stack.push(n)
          }

        }
      }

      if( (touchedAtlBottom && touchedPacTop) ||
          (touchedAtlBottom && touchedPacLeft) ||
          (touchedAtlRight && touchedPacTop) ||
          (touchedAtlRight && touchedPacLeft)
       ) {
          result.push(startCoords)
       }

    }

  }

  return result
};





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 994 ---> ROTTING ORANGES (INFECTION MATRIX SPREAD USING LEVELS TO SPREAD INFECTION)

  // https://i.gyazo.com/03e8f1fdc90f7dcec54d852e3ac6468b.png


  var orangesRotting = function(grid) {

    minutes = 0;
    let totalFreshCount = 0

    const queue = []

    for(let r = 0; r < grid.length; r++) {
        const row = grid[r]
        for(let c = 0; c < row.length; c++) {
            if(grid[r][c] === 1 ) totalFreshCount++
            if(grid[r][c] === 2 ) queue.push([r,c])
        }
    }

    if(totalFreshCount === 0) return 0

    while(queue.length >= 1) {
        const level = queue.length
        for(let i = 0; i < level; i++) { // process and run infection of all remaining infected oranges (this is how the infection spreads rapidly)
            const [row, col] = queue.shift()
            const neighbors = getNeighbors(grid, row, col)
            for(let n of neighbors) {
                grid[n[0]][n[1]] = 2; // mark the fresh oranges as infected, and then push them to the queue to be processed in the next level of infection
                totalFreshCount-- // decrement the fresh orange count
                queue.push(n)
            }

        }
        minutes++ // after each ROUND of infection, increment the minute counter
    }

    return totalFreshCount === 0 ? minutes - 1 : -1; // if all oranges were infected, return the minutes, else return -1 because infection didnt hit all fresh oranges
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://i.gyazo.com/ff26ae688c26a3ab82aaf3118d3ad4c3.png


var isBipartite = function(graph) {

  const adjList = buildGraph(graph)
  const set = new Set()

  let totalNodeCount = 0
  for(let i = 0; i < graph.length; i++) {
      totalNodeCount += i
  }

  for(let key in adjList) {

      let total = totalNodeCount
      let count = Number(key);

      const valArray = adjList[key]
      for(let val of valArray) {
          count += val
      }

      let missingVal = total - count;
      set.add( [Number(key), missingVal].toString() )
      set.add( [missingVal, Number(key)].toString() )
  }

  return set.size === 4
};




function buildGraph(edgeList) {
const adjacencyList = {};

// Iterate through each edge in the edgeList
for (let i = 0; i < edgeList.length; i++) {
  const vertex = i; // Each vertex is represented by its index in the edgeList
  const edges = edgeList[i];

  // Create an empty array for the current vertex in the adjacency list
  adjacencyList[vertex] = [];

  // Iterate through the edges connected to the current vertex
  for (const edge of edges) {
    adjacencyList[vertex].push(edge);
  }
}

return adjacencyList
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://i.gyazo.com/ff26ae688c26a3ab82aaf3118d3ad4c3.png


var isBipartite = function(graph) {

  const color = new Array(graph.length).fill(0) // color array that represents the structure of a biparite graph (keeps track of colors)

  for(let i = 0; i < color.length; i++) {
      if(color[i] === 0) { // if node is uncolored, color it as 1 or -1 (kind of acts as visited as well, will only go if un-colored)
          const queue = [i] // push the colored node to the queue
          color[i] = 1

          while(queue.length >= 1) {
              const node = queue.shift()
              for(let neighbor of graph[node]) { // iterate through the node's neighbor and check their colors
                  if(color[neighbor] === 0) { // if neighbor is uncolored...
                      color[neighbor] = -color[node] // THEN, make the neighbor's of that node the opposite color
                      queue.push(neighbor) // traverse the neighbors and check their colors
                  } else if(color[node] === color[neighbor]) { // if the neighbor already has a color, and its the same color, return false
                      return false
                  }
              }
          }
      }
  }

  return true
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://i.gyazo.com/1877a8d60723f699b05d0684cf0e926a.png

var climbStairs = function(n, memo = {}) {
  // Check if the result for 'n' is already memoized
  if (n in memo) {
      return memo[n];
  }

  // Base cases
  if (n === 1) {
      return 1; // Only 1 way to climb 1 step (base case)
  }

  if (n === 2) {
      return 2; // Only 2 ways to climb 2 steps (base case)
  }

  // Calculate the number of ways to climb 'n' steps by recursively
  // calculating 'n-1' and 'n-2' steps, and memoizing the result.
  const ways = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

  // Store the result in the 'memo' object for future use, so it's remembered
  // whenever 'climbStairs' is called with the same 'n' value in the future.
  memo[n] = ways;

  return ways;
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// https://leetcode.com/problems/coin-change/


var coinChange = function(coins, amount) {
  const arr = new Array(amount + 1).fill(amount + 1)
  arr[0] = 0

  for(const coin of coins) {
      // console.log("COIN", coin)
      for (let i = coin; i <= amount; i++) {
          // console.log("I", i)
          arr[i] = Math.min(arr[i], arr[i - coin] + 1)
      }
  }
  return arr[amount] > amount ? -1 : arr[amount]
};


// for the first coint in coins array, our "arr" will capture the minumum required amount to reach the target amount
  // ex ---> arr after COIN 1 ---------->   [0,1,2,3,4,5,6,7,8,9,10,11]
  //                                                  |
  //                                                  |
  //           this process repeats for COIN 2.  THe second coin can now use this arr as a comparison to find min amount of coins required

  // if by the time the loop ends, and arr[amount] value is greater than the target amount, a combination does not exist, so return -1





  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // https://leetcode.com/problems/add-two-numbers/submissions/


  var addTwoNumbers = function(l1, l2) {

    const result = []
    const l1Vals = []
    const l2Vals = []

    while(l1 !== null) {
        l1Vals.push(l1.val)
        l1 = l1.next
    }
    while(l2 !== null) {
       l2Vals.push(l2.val)
        l2 = l2.next
    }

    const longest = Math.max(l1Vals.length, l2Vals.length)
    const shortest = Math.min(l1Vals.length, l2Vals.length)

    if(shortest !== longest) {
        const fill = longest - shortest

        if(l1Vals.length !== longest) {
            for(let i = 0; i < fill; i++) {
                l1Vals.push(0)
            }

        } else {
            for(let i = 0; i < fill; i++) {
                l2Vals.push(0)
            }
        }
    }

    for(let i = 0; i < longest; i++) {

        const sum = l1Vals[i] + l2Vals[i]
        // Number(sum.toString().split("")[1])

        if(i !== longest - 1) {

            if(sum > 9) {
                result.push(Number(sum.toString().split("")[1]))
                l1Vals[i + 1]++
            } else {
                result.push(sum)
            }

        } else {

            if(sum > 9) {
                result.push(Number(sum.toString().split("")[1]))
                result.push(Number(sum.toString().split("")[0]))
            } else {
                result.push(sum)
            }

        }

    }

    let newList = new ListNode(result.shift(), null)
    const head = newList

    while(result.length) {
        const newListNext = new ListNode(result.shift(), null)
        newList.next = newListNext
        newList = newList.next

    }

    newList = head
    return newList

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// https://leetcode.com/problems/search-insert-position/description/


var searchInsert = function(nums, target) {
  // if on last i in loop and target hasnt been found, return nums.length
  // if you find a nums[i] that is < target and nums[i + 1] is > than target, return nums[i + 1]

  if(nums[0] > target) return 0

  for(let i = 0; i < nums.length; i++) {
      if(i !== nums.length - 1) {
          if(nums[i] === target) return i
          if(nums[i] < target && nums[i + 1] > target) return i + 1
      } else {
          if(nums[i] === target) return i
      }
  }

  return nums.length
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function multStrings(num1, num2) {

//   const obj = {
//     48: 0,
//     49: 1,
//     50: 2,
//     51: 3,
//     52: 4,
//     53: 5,
//     54: 6,
//     55: 7,
//     56: 8,
//     57: 9
//   }

//   let realNumOne = 0
//   let realNumTwo = 0

//   for(let i = 0; i < num1.length; i++) {
//     let num = num1[i]
//     const fill = Math.abs( (i + 1) - num1.length )

//     let zero = ""
//     for(let x = 0; x < fill; x++) {
//       zero += "0"
//     }

//     let sub = obj[num.charCodeAt()]
//     sub += zero

//     const realNum = Number(sub)
//     realNumOne += realNum

//   }

//   for(let i = 0; i < num2.length; i++) {
//     let num = num2[i]
//     const fill = Math.abs( (i + 1) - num2.length )

//     let zero = ""
//     for(let x = 0; x < fill; x++) {
//       zero += "0"
//     }

//     let sub = obj[num.charCodeAt()]
//     sub += zero

//     const realNum = Number(sub)
//     realNumTwo += realNum

//   }

//   return (realNumOne * realNumTwo).toString()

// }


// console.log("OUTPUT ", multStrings("2", "3"))


var multiply = function(num1, num2) {
  const obj = {
  '0': 0n,
  '1': 1n,
  '2': 2n,
  '3': 3n,
  '4': 4n,
  '5': 5n,
  '6': 6n,
  '7': 7n,
  '8': 8n,
  '9': 9n,
};

let realNumOne = 0n;
let realNumTwo = 0n;

for (let i = 0; i < num1.length; i++) {
  let num = num1[i];
  const fill = BigInt(Math.abs(i + 1 - num1.length));

  let sub = obj[num];
  sub *= 10n ** fill;

  realNumOne += sub;
}

for (let i = 0; i < num2.length; i++) {
  let num = num2[i];
  const fill = BigInt(Math.abs(i + 1 - num2.length));

  let sub = obj[num];
  sub *= 10n ** fill;

  realNumTwo += sub;
}

console.log("---------------->", realNumOne, "------------------>", realNumTwo)
return (realNumOne * realNumTwo).toString();

};

// console.log("OUTPUT ", multiply("2", "3"))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/unique-paths/description/?envType=featured-list&envId=top-interview-questions?envType=featured-list&envId=top-interview-questions

var uniquePaths = function(m, n) {
  const memo = buildMatrix(m,n)
  const start = [0,0]
  const destination = [m-1, n-1]


  function numPaths(position, destination) {
      const [currRow, currCol] = position
      const [destRow, destCol] = destination
      if(currRow === destRow && currCol === destCol) {
          return 1
      }

      // check if out of bounds
      if( currRow > (m - 1) || currCol > (n - 1) ) return 0

      // if we already calculated # of unique from this position, return it
      if(memo[currRow][currCol] !== 0) return memo[currRow][currCol]

      // move down
      const pathsDown = numPaths([currRow + 1, currCol], destination)
      // move right
      const pathsRight = numPaths([currRow, currCol + 1], destination)

      // store the # of uniquePaths at this positon so it can be used later
      // pathsDown + pathsRight is giving the final count by adding the result of the callstacks (ex: 1 + 1 + 0 + 1 + 0)
      memo[currRow][currCol] = pathsDown + pathsRight;
      return memo[currRow][currCol];
  }

  return numPaths(start, destination)

};



function buildMatrix(m,n) {
  const matrix = new Array(m)
  for(let i = 0; i < matrix.length; i++) {
      matrix[i] = new Array(n).fill(0)
  }
  return matrix
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function parseStringToNum(string) {
  const number = Number(string)
  return number
}
console.log(parseStringToNum('12345'))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/pascals-triangle/

var generate = function(numRows) {
  if(numRows === 1) return [[1]]
  if(numRows === 2) return [[1], [1,1]]

  const pascal = [[1], [1,1]]
  i = 2
  while(i < numRows) {
      const lastRow = pascal[i - 1]
      const nextRow = [1]
      for(let j = 0; j < lastRow.length; j++) {
          if(lastRow[j + 1]) {
              const currNum = lastRow[j] + lastRow[j + 1]
              nextRow.push(currNum)
          }
      }
      nextRow.push(1)
      pascal.push(nextRow)
      i += 1
  }

  console.log("PASCAL ---> ", pascal)
  return pascal
};



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/single-number/


var singleNumber = function(nums) {
  const counter = {}
  for(let i = 0; i < nums.length; i++) {
      if (counter[nums[i]]) {
          counter[nums[i]] ++
      } else {
          counter[nums[i]] = 1
      }
  }

  for(let key in counter) {
      if (counter[key] === 1) return key
  }
};
