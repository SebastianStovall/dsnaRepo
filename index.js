// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let second = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = second;
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

var setZeroes = function (matrix) {
  let arrsWithZero = [];
  let positionOfZeros = [];

  // Loop declration will handle which arr's have 0s, and the index position of them
  // we can use this for two things:
  // 1.) zero out any arr's that contain a 0
  // 2.) if no zeros present in that sub array, then 0 out where the position of the 0 was found in

  for (let i = 0; i < matrix.length; i++) {
    let arr = matrix[i];

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        arrsWithZero.push(i);
        positionOfZeros.push(j);
      }
    }
  }

  if (arrsWithZero.length === 0) return matrix;
  for (let i = 0; i < arrsWithZero.length; i++) {
    let indexOfArr = arrsWithZero[i];
    for (let j = 0; j < matrix[indexOfArr].length; j++) {
      // console.log("LOOK HERE", matrix[indexOfArr][j])
      matrix[indexOfArr][j] = 0;
    }
  }

  for (let i = 0; i < positionOfZeros.length; i++) {
    let indexPosition = positionOfZeros[i];
    for (let j = 0; j < matrix.length; j++) {
      let arr = matrix[j];
      arr[indexPosition] = 0;
    }
  }
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------//

// https://i.gyazo.com/4ad6b7da98307bd2e01f714fda31cbcd.png

function getLargestNumber(num) {
  // Write your code here
  // try a bubble sort where the swap condition is if i and i+1 are both odd or even can swap, and swap if i + 1 is larger than i

  const isEven = (num) => {
    if (num % 2 === 0) return true;
    return false;
  };

  const isOdd = (num) => {
    if (num % 2 !== 0) return true;
    return false;
  };

  let numArr = num.split("");
  for (let i = numArr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (isEven(numArr[j]) && isEven(numArr[j + 1])) {
        // console.log("OK")
        if (numArr[j + 1] > numArr[j]) {
          let second = numArr[j + 1];
          numArr[j + 1] = numArr[j];
          numArr[j] = second;
        }
      } else if (isOdd(numArr[j]) && isOdd(numArr[j + 1])) {
        // console.log("OK 2")
        if (numArr[j + 1] > numArr[j]) {
          let second = numArr[j + 1];
          numArr[j + 1] = numArr[j];
          numArr[j] = second;
        }
      }
    }
  }

  return numArr.join("");
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------//

// https://i.gyazo.com/967fcafe45d88112c074d2c9b20cb3a7.png

function maxEnergy(mat) {
  let consumption = 100;
  for (let i = 0; i < 2; i++) {
    let currConsumption = Infinity;

    let subArr = mat[i];
    for (let j = 0; j < subArr.length; j++) {
      // directly down
      if (subArr[j] + mat[i + 1][j] < currConsumption)
        currConsumption = subArr[j] + mat[i + 1][j];
      // left
      if (mat[i + 1][j - 1]) {
        if (subArr[j] + mat[i + 1][j - 1] < currConsumption)
          currConsumption = subArr[j] + mat[i + 1][j - 1];
      }
      // right
      if (mat[i + 1][j + 1]) {
        if (subArr[j] + mat[i + 1][j + 1] < currConsumption)
          currConsumption = subArr[j] + mat[i + 1][j + 1];
      }
    }
    consumption -= currConsumption;
  }

  return consumption;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /* Heaps */

// // left child: i * 2 + 1
// // right child: i * 2 + 2
// // parent: Math.floor((i - 1) / 2)

function insertMinHeap(arr, value) {
  arr.push(value); // push the value onto the heap

  let i = arr.length - 1; // start the index pointer at the end of the heap (to represent the idx and value of the insertion node)

  while (i > 0 && arr[i] < arr[Math.floor((i - 1) / 2)]) {
    // while idx pointer is not the root node (if root node, no swaps possible... tree/heap is sorted) and the insertion node is LESS THAN parent node...
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

insertMinHeap(minHeap, 2);
insertMinHeap(minHeap, 50);
insertMinHeap(minHeap, 7);
insertMinHeap(minHeap, 6);

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

    if (leftChild < arr.length && arr[leftChild] < arr[smallest]) {
      // if the left child is present in the tree, and leftChild is less < smallest idx, we will change smallest to be the idx pointer of leftChild
      smallest = leftChild;
    }

    if (rightChild < arr.length && arr[rightChild] < arr[smallest]) {
      // if the right child is present in the tree, and rightChild is < than smallest idx, we will change smallest to be the idx pointer of rightChild
      smallest = rightChild;
    }

    if (smallest !== i) {
      // see if idx pointers are different on this iteration (if true, a swap will be made)
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

var SeatManager = function (n) {
  this.seats = n;

  const seatArr = [];
  for (let i = 1; i <= this.seats; i++) {
    seatArr.push([i]);
  }
  this.seatArr = seatArr;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  if (this.seatArr.length === 0) return null;
  if (this.seatArr.length === 1) return this.seatArr.pop()[0];

  const minVal = this.seatArr[0][0];
  this.seatArr[0] = this.seatArr.pop();

  let i = 0;

  while (true) {
    let smallest = i;

    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;

    if (
      rightChild < this.seatArr.length &&
      this.seatArr[rightChild][0] < this.seatArr[smallest][0]
    ) {
      smallest = rightChild;
    }

    if (
      leftChild < this.seatArr.length &&
      this.seatArr[leftChild][0] < this.seatArr[smallest][0]
    ) {
      smallest = leftChild;
    }

    if (smallest !== i) {
      [this.seatArr[i], this.seatArr[smallest]] = [
        this.seatArr[smallest],
        this.seatArr[i],
      ];
      i = smallest;
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
SeatManager.prototype.unreserve = function (seatNumber) {
  this.seatArr.push([seatNumber]);
  let i = this.seatArr.length - 1;

  while (
    i > 0 &&
    this.seatArr[i][0] < this.seatArr[Math.floor((i - 1) / 2)][0]
  ) {
    [this.seatArr[i], this.seatArr[Math.floor((i - 1) / 2)]] = [
      this.seatArr[Math.floor((i - 1) / 2)],
      this.seatArr[i],
    ];
    i = Math.floor((i - 1) / 2);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://i.gyazo.com/ee32368d115f6798436c1fbfdf66f0e3.png

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums;
};

// const obj1 = new KthLargest(10, [2,3,4,5,6])
// console.log("TEST", obj1)

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.nums.push(val);
  const sortedNums = this.nums.sort((a, b) => b - a);

  // console.log(sortedNums)
  return sortedNums[this.k - 1];
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
    for (let i = 0; i <= smallerPermutation.length; i++) {
      // iterates through each element of smaller permutation ALL THE WAY UP TO LENGTH (so if perm = [2,3], 3 iterations ---> i = 0, i = 1, i = 2)
      const permutation = [
        ...smallerPermutation.slice(0, i),
        firstElement,
        ...smallerPermutation.slice(i),
      ];
      allPermutations.push(permutation);
    }
  }

  return allPermutations;
}

const array = [2, 3];
const result = permute(array);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var maxAreaOfIsland = function (grid) {
  let count = 0;
  let maxIsland = 0;

  let visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    const row = grid[r];
    for (let c = 0; c < row.length; c++) {
      const ele = row[c];
      if (ele === 1) {
        let coords = [r, c];
        visited.add(coords.toString());
        const queue = [coords];

        while (queue.length >= 1) {
          const curr = queue.shift();
          const [row, col] = curr;
          count++;

          const neighbors = getNeighbors(grid, row, col);
          for (let neighbor of neighbors) {
            if (!visited.has(neighbor.toString())) {
              visited.add(neighbor.toString());
              queue.push(neighbor);
            }
          }
        }

        if (count > maxIsland) {
          maxIsland = count;
          count = 0;
        } else {
          count = 0;
        }
      }
    }
  }
  return maxIsland;
};

function getNeighbors(matrix, row, col) {
  // up down left right only
  const neighbors = [];

  if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }

  if (row > 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }

  if (col > 0 && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }

  if (col < matrix[0].length - 1 && matrix[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }

  return neighbors;
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

var pacificAtlantic = function (heights) {
  const result = [];

  for (let r = 0; r < heights.length; r++) {
    let row = heights[r];
    for (let c = 0; c < row.length; c++) {
      let visited = new Set();

      let startCoords = [r, c];
      visited.add(startCoords.toString());

      let stack = [startCoords];

      let touchedAtlBottom = false;
      let touchedAtlRight = false;
      let touchedPacTop = false;
      let touchedPacLeft = false;

      while (stack.length >= 1) {
        const curr = stack.pop();
        const [row, col] = curr;

        if (row === heights.length - 1) touchedAtlBottom = true;
        if (col === heights[0].length - 1) touchedAtlRight = true;
        if (row === 0) touchedPacTop = true;
        if (col === 0) touchedPacLeft = true;

        const neighbors = getNeighbors(heights, row, col);
        for (let n of neighbors) {
          if (!visited.has(n.toString())) {
            visited.add(n.toString());
            stack.push(n);
          }
        }
      }

      if (
        (touchedAtlBottom && touchedPacTop) ||
        (touchedAtlBottom && touchedPacLeft) ||
        (touchedAtlRight && touchedPacTop) ||
        (touchedAtlRight && touchedPacLeft)
      ) {
        result.push(startCoords);
      }
    }
  }

  return result;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 994 ---> ROTTING ORANGES (INFECTION MATRIX SPREAD USING LEVELS TO SPREAD INFECTION)

// https://i.gyazo.com/03e8f1fdc90f7dcec54d852e3ac6468b.png

var orangesRotting = function (grid) {
  minutes = 0;
  let totalFreshCount = 0;

  const queue = [];

  for (let r = 0; r < grid.length; r++) {
    const row = grid[r];
    for (let c = 0; c < row.length; c++) {
      if (grid[r][c] === 1) totalFreshCount++;
      if (grid[r][c] === 2) queue.push([r, c]);
    }
  }

  if (totalFreshCount === 0) return 0;

  while (queue.length >= 1) {
    const level = queue.length;
    for (let i = 0; i < level; i++) {
      // process and run infection of all remaining infected oranges (this is how the infection spreads rapidly)
      const [row, col] = queue.shift();
      const neighbors = getNeighbors(grid, row, col);
      for (let n of neighbors) {
        grid[n[0]][n[1]] = 2; // mark the fresh oranges as infected, and then push them to the queue to be processed in the next level of infection
        totalFreshCount--; // decrement the fresh orange count
        queue.push(n);
      }
    }
    minutes++; // after each ROUND of infection, increment the minute counter
  }

  return totalFreshCount === 0 ? minutes - 1 : -1; // if all oranges were infected, return the minutes, else return -1 because infection didnt hit all fresh oranges
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://i.gyazo.com/ff26ae688c26a3ab82aaf3118d3ad4c3.png

var isBipartite = function (graph) {
  const adjList = buildGraph(graph);
  const set = new Set();

  let totalNodeCount = 0;
  for (let i = 0; i < graph.length; i++) {
    totalNodeCount += i;
  }

  for (let key in adjList) {
    let total = totalNodeCount;
    let count = Number(key);

    const valArray = adjList[key];
    for (let val of valArray) {
      count += val;
    }

    let missingVal = total - count;
    set.add([Number(key), missingVal].toString());
    set.add([missingVal, Number(key)].toString());
  }

  return set.size === 4;
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

  return adjacencyList;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://i.gyazo.com/ff26ae688c26a3ab82aaf3118d3ad4c3.png

var isBipartite = function (graph) {
  const color = new Array(graph.length).fill(0); // color array that represents the structure of a biparite graph (keeps track of colors)

  for (let i = 0; i < color.length; i++) {
    if (color[i] === 0) {
      // if node is uncolored, color it as 1 or -1 (kind of acts as visited as well, will only go if un-colored)
      const queue = [i]; // push the colored node to the queue
      color[i] = 1;

      while (queue.length >= 1) {
        const node = queue.shift();
        for (let neighbor of graph[node]) {
          // iterate through the node's neighbor and check their colors
          if (color[neighbor] === 0) {
            // if neighbor is uncolored...
            color[neighbor] = -color[node]; // THEN, make the neighbor's of that node the opposite color
            queue.push(neighbor); // traverse the neighbors and check their colors
          } else if (color[node] === color[neighbor]) {
            // if the neighbor already has a color, and its the same color, return false
            return false;
          }
        }
      }
    }
  }

  return true;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://i.gyazo.com/1877a8d60723f699b05d0684cf0e926a.png

var climbStairs = function (n, memo = {}) {
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

var coinChange = function (coins, amount) {
  const arr = new Array(amount + 1).fill(amount + 1);
  arr[0] = 0;

  for (const coin of coins) {
    // console.log("COIN", coin)
    for (let i = coin; i <= amount; i++) {
      // console.log("I", i)
      arr[i] = Math.min(arr[i], arr[i - coin] + 1);
    }
  }
  return arr[amount] > amount ? -1 : arr[amount];
};

// for the first coint in coins array, our "arr" will capture the minumum required amount to reach the target amount
// ex ---> arr after COIN 1 ---------->   [0,1,2,3,4,5,6,7,8,9,10,11]
//                                                  |
//                                                  |
//           this process repeats for COIN 2.  THe second coin can now use this arr as a comparison to find min amount of coins required

// if by the time the loop ends, and arr[amount] value is greater than the target amount, a combination does not exist, so return -1

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/add-two-numbers/submissions/

var addTwoNumbers = function (l1, l2) {
  const result = [];
  const l1Vals = [];
  const l2Vals = [];

  while (l1 !== null) {
    l1Vals.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    l2Vals.push(l2.val);
    l2 = l2.next;
  }

  const longest = Math.max(l1Vals.length, l2Vals.length);
  const shortest = Math.min(l1Vals.length, l2Vals.length);

  if (shortest !== longest) {
    const fill = longest - shortest;

    if (l1Vals.length !== longest) {
      for (let i = 0; i < fill; i++) {
        l1Vals.push(0);
      }
    } else {
      for (let i = 0; i < fill; i++) {
        l2Vals.push(0);
      }
    }
  }

  for (let i = 0; i < longest; i++) {
    const sum = l1Vals[i] + l2Vals[i];
    // Number(sum.toString().split("")[1])

    if (i !== longest - 1) {
      if (sum > 9) {
        result.push(Number(sum.toString().split("")[1]));
        l1Vals[i + 1]++;
      } else {
        result.push(sum);
      }
    } else {
      if (sum > 9) {
        result.push(Number(sum.toString().split("")[1]));
        result.push(Number(sum.toString().split("")[0]));
      } else {
        result.push(sum);
      }
    }
  }

  let newList = new ListNode(result.shift(), null);
  const head = newList;

  while (result.length) {
    const newListNext = new ListNode(result.shift(), null);
    newList.next = newListNext;
    newList = newList.next;
  }

  newList = head;
  return newList;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/search-insert-position/description/

var searchInsert = function (nums, target) {
  // if on last i in loop and target hasnt been found, return nums.length
  // if you find a nums[i] that is < target and nums[i + 1] is > than target, return nums[i + 1]

  if (nums[0] > target) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums.length - 1) {
      if (nums[i] === target) return i;
      if (nums[i] < target && nums[i + 1] > target) return i + 1;
    } else {
      if (nums[i] === target) return i;
    }
  }

  return nums.length;
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

var multiply = function (num1, num2) {
  const obj = {
    0: 0n,
    1: 1n,
    2: 2n,
    3: 3n,
    4: 4n,
    5: 5n,
    6: 6n,
    7: 7n,
    8: 8n,
    9: 9n,
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

  console.log(
    "---------------->",
    realNumOne,
    "------------------>",
    realNumTwo
  );
  return (realNumOne * realNumTwo).toString();
};

// console.log("OUTPUT ", multiply("2", "3"))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/unique-paths/description/?envType=featured-list&envId=top-interview-questions?envType=featured-list&envId=top-interview-questions

var uniquePaths = function (m, n) {
  const memo = buildMatrix(m, n);
  const start = [0, 0];
  const destination = [m - 1, n - 1];

  function numPaths(position, destination) {
    const [currRow, currCol] = position;
    const [destRow, destCol] = destination;
    if (currRow === destRow && currCol === destCol) {
      return 1;
    }

    // check if out of bounds
    if (currRow > m - 1 || currCol > n - 1) return 0;

    // if we already calculated # of unique from this position, return it
    if (memo[currRow][currCol] !== 0) return memo[currRow][currCol];

    // move down
    const pathsDown = numPaths([currRow + 1, currCol], destination);
    // move right
    const pathsRight = numPaths([currRow, currCol + 1], destination);

    // store the # of uniquePaths at this positon so it can be used later
    // pathsDown + pathsRight is giving the final count by adding the result of the callstacks (ex: 1 + 1 + 0 + 1 + 0)
    memo[currRow][currCol] = pathsDown + pathsRight;
    return memo[currRow][currCol];
  }

  return numPaths(start, destination);
};

function buildMatrix(m, n) {
  const matrix = new Array(m);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(n).fill(0);
  }
  return matrix;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function parseStringToNum(string) {
  const number = Number(string);
  return number;
}
// console.log(parseStringToNum('12345'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/pascals-triangle/

var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const pascal = [[1], [1, 1]];
  i = 2;
  while (i < numRows) {
    const lastRow = pascal[i - 1];
    const nextRow = [1];
    for (let j = 0; j < lastRow.length; j++) {
      if (lastRow[j + 1]) {
        const currNum = lastRow[j] + lastRow[j + 1];
        nextRow.push(currNum);
      }
    }
    nextRow.push(1);
    pascal.push(nextRow);
    i += 1;
  }

  console.log("PASCAL ---> ", pascal);
  return pascal;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
  const counter = {};
  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]]) {
      counter[nums[i]]++;
    } else {
      counter[nums[i]] = 1;
    }
  }

  for (let key in counter) {
    if (counter[key] === 1) return key;
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
  const tracker = {};
  let majorityVal = -1000;
  let majorityKey;

  for (let i = 0; i < nums.length; i++) {
    if (!tracker[nums[i]]) {
      tracker[nums[i]] = 1;
    } else {
      tracker[nums[i]]++;
    }
  }

  console.log(tracker);

  for (let key in tracker) {
    if (tracker[key] > majorityVal) {
      majorityVal = tracker[key];
      majorityKey = key;
    }
  }

  return majorityKey;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/house-robber/

var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // make dp array to store profit ( dp[dp.length - 1] will represent the maximum profit possible)
  const dp = new Array(nums.length);

  // set the stage for the dp
  dp[0] = nums[0]; // if nums only has 1 element, max profit is the first house
  dp[1] = Math.max(nums[0], nums[1]); // if nums has 2 elements, max profit is whichever house's value is more

  // find the max profit for remaining houses on the block
  for (let i = 2; i < nums.length; i++) {
    // see if the (current house's value + previous max-profit) overrides the current maximum profit possible, if so, that becomes the
    // new max profit
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[dp.length - 1];
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/happy-number/

var isHappy = function (n) {
  const setTarget = 1000;
  let j = 0;

  try {
    while (j < setTarget) {
      n = n.toString();
      let total = 0;

      for (let i = 0; i < n.length; i++) {
        let current = Number(n[i]);
        total += current * current;
      }

      if (total === 1) return true;
      n = total;
      j += 1;
    }

    return false;
  } catch (e) {
    console.log("ERROR", e);
    return false;
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/word-pattern/submissions/

var wordPattern = function (pattern, s) {
  const bijection = {};
  const sArr = s.split(" ");

  // if there are characters that cannot be mapped due to sizing issues, return false
  if (pattern.length !== sArr.length) return false;
  // keeps track of what keys map to which values
  const wordsUsed = new Set();

  for (let i = 0; i < sArr.length; i++) {
    console.log("BIJECT ", bijection);
    if (!bijection[pattern[i]]) {
      bijection[pattern[i]] = sArr[i];

      // checks if this word has already been mapped in the pattern, if so return false
      if (wordsUsed.has(sArr[i])) {
        return false;
      } else {
        wordsUsed.add(sArr[i]);
      }
    } else {
      // if the mapping is inconsistent, return false
      if (bijection[pattern[i]] !== sArr[i]) return false;
    }
  }

  return true;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------ //

function hourglassSum(arr) {
  // Convert to a 3x3 matrix
  let numRows = 6;
  let numCols = 6;

  let matrix = [];
  for (let i = 0; i < numRows; i++) {
    matrix.push(arr.slice(i * numCols, (i + 1) * numCols));
  }
  arr = matrix;

  function findMaxForSingleRow(matrix, row) {
    let highestSum = 0;
    for (let i = 1; i <= 4; i++) {
      const top = matrix[row][i - 1] + matrix[row][i] + matrix[row][i + 1];
      const middle = matrix[row + 1][i];
      const bottom =
        matrix[row + 2][i - 1] + matrix[row + 2][i] + matrix[row + 2][i + 1];
      console.log(top, middle, bottom);
      const totalHourGlassSum = top + middle + bottom;
      if (totalHourGlassSum > highestSum) highestSum = totalHourGlassSum;
    }
    return highestSum;
  }

  let highestSum = 0;
  for (let i = 0; i < 4; i++) {
    const highestSumOfRow = findMaxForSingleRow(arr, i);
    if (highestSumOfRow >= highestSum) highestSum = highestSumOfRow;
  }

  return highestSum;
}

const arr = [
  1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 4, 4, 0, 0, 0,
  0, 2, 0, 0, 0, 0, 1, 2, 4, 0,
];

// console.log("SSSS", hourglassSum(arr))

// ----------------------------------------------------------------------------------------------------------------------------------------------------------- //

function moveZeros(nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
}

// console.log("TEST THIS", moveZeros([0,0,0,1,0,5,12,18,10]))

// ----------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/find-the-difference/description/

var findTheDifference = function (s, t) {
  const trackS = {};
  const trackT = {};

  for (let i = 0; i < s.length; i++) {
    if (!trackS[s[i]]) {
      trackS[s[i]] = 1;
    } else {
      trackS[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!trackT[t[i]]) {
      trackT[t[i]] = 1;
    } else {
      trackT[t[i]]++;
    }
  }

  for (let key in trackT) {
    if (trackS[key] === undefined) return key; // if wasnt in S to begin with, return that letter
    if (trackS[key] !== trackT[key]) return key; // if values at that chracter dont match in each string, return that character
  }
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/longest-palindrome/description/

var longestPalindrome = function (s) {
  // remember you can discard whatever you dont need
  // for example, if a has a total of 3 occurences, you can use 2 of those occurences in the palindrome count, and discard the 3rd one
  const tracker = {};
  let ans = 0;

  for (let c of s) {
    if (!tracker[c]) {
      tracker[c] = 1;
    } else {
      tracker[c]++;
    }

    if (tracker[c] % 2 === 0) {
      // If it is even, it means that the current character WILL contribute to forming palindromes, and the ans variable is incremented by 2.
      ans += 2;
    }
  }

  return s.length > ans ? ans + 1 : ans; // if the ans is a substring, add a character to the middle of the string, since you can have a single odd pairing, if its already the length of the string, just return the ans since it the longest palindrome is the entire string
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/keyboard-row/description/

var findWords = function (words) {
  let ans = [];
  let map = {
    a: 1,
    b: 2,
    c: 2,
    d: 1,
    e: 0, // map that represents where each character resides in what row
    f: 1,
    g: 1,
    h: 1,
    i: 0,
    j: 1,
    k: 1,
    l: 1,
    m: 2,
    n: 2,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 1,
    t: 0,
    u: 0,
    v: 2,
    w: 0,
    x: 2,
    y: 0,
    z: 2,
  };

  words.forEach((word) => {
    // for each word...
    const current = word.toLowerCase(); // Convert the word to lowercase
    let found = true;
    const row = map[current.charAt(0)]; // Get the row of the first character in the word

    for (let i = 0; i < current.length; i++) {
      // Iterate through each character in the word
      if (map[current[i]] !== row) {
        // If the character's row doesn't match the first character's row, set the flag to false and break the loop
        found = false;
        break; // only breaks the loop that its called in
      }
    }

    if (found) {
      // If the word meets the condition, push it to the ans array
      ans.push(word);
    }
  });

  return ans;
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/island-perimeter/description/

var islandPerimeter = function (grid) {
  let perm = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) {
        const amountTouching = findTouching(r, c, grid);
        perm += 4 - amountTouching;
      }
    }
  }
  return perm;
};

function findTouching(r, c, grid) {
  let touching = 0;
  // up
  if (grid[r - 1] && grid[r - 1][c] && grid[r - 1][c] === 1) touching++;
  // right
  if (grid[r] && grid[r][c + 1] && grid[r][c + 1] === 1) touching++;
  // down
  if (grid[r + 1] && grid[r + 1][c] && grid[r + 1][c] === 1) touching++;
  // left
  if (grid[r] && grid[r][c - 1] && grid[r][c - 1] === 1) touching++;

  return touching;
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/set-mismatch/description/

var findErrorNums = function (nums) {
  // get the EXPECTED summation of (1 - n)
  let expectedSum = 0;
  let i = 1;
  while (i < nums.length + 1) {
    expectedSum += i;
    i++;
  }

  // find our repeating number value, and track the total summation of (1 - n) of MISMATCH set
  let mismatchSum = 0;
  let repeatedNumber = null;
  const tracker = new Set();
  for (let i = 0; i < nums.length; i++) {
    mismatchSum += nums[i];
    if (tracker.has(nums[i])) {
      repeatedNumber = nums[i];
    } else {
      tracker.add(nums[i]);
    }
  }

  // We can find out missing number by taking the summation of mismatch (without the extra repeating value) and subtracting it by the expecting sum
  const sumMinusRepeat = mismatchSum - repeatedNumber;
  const missingNumber = expectedSum - sumMinusRepeat;
  return [repeatedNumber, missingNumber];
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/construct-the-rectangle/description/

var constructRectangle = function (area) {
  // [length, width]
  // answer is the area with the smallest difference of  length - width

  let factors = []; // generate all factors of area input and store them in an array
  let index = 0;
  while (index <= area) {
    if (area % index === 0) factors.push(index);
    index++;
  }

  let j = factors.length - 1; // i starts at beginning, j starts at end ( [0, 4] [1, 3] [2, 2] [3,1] [4, 0] )
  let ans = null;
  let smallestDifference = Infinity;

  for (let i = 0; i < factors.length; i++) {
    const length = factors[i];
    const width = factors[j];
    if (length >= width && length - width <= smallestDifference) {
      ans = [length, width];
      smallestDifference = length - width;
    }
    j--;
  }

  return ans;
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- //

var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 0 || n === 0) return true; // if no flowers to place, or no flowers in garden
  if (flowerbed.length === 1 && flowerbed[0] === 0) return true; // loop doesnt handle case check of one flower in garden, so handle as an edge case
  if (flowerbed.length === 1 && flowerbed[0] === 1) return false;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      i === 0 &&
      flowerbed[i + 1] !== undefined &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i] === 0
    ) {
      // if i === 0, only check right and current
      flowerbed[i] = 1;
      n -= 1;
    } else if (
      i === flowerbed.length - 1 &&
      flowerbed[i - 1] !== undefined &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0
    ) {
      // if i == last, check left and current
      flowerbed[i] = 1;
      n -= 1;
    } else if (
      flowerbed[i] === 0 &&
      i < flowerbed.length - 1 &&
      flowerbed[i + 1] === 0 &&
      i !== 0 &&
      flowerbed[i - 1] === 0
    ) {
      // check curr, left, and right
      flowerbed[i] = 1;
      n -= 1;
    }
  }

  return n <= 0; // if you were able to place all flowers, or had room to even place more flowers than what you needed, return TRUE... else FALSE
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

var floodFill = function (image, sr, sc, color) {
  // queue BFT (push pop)
  // find neighbors from source, implement a queue, turn coordinates with src value to color value (if src value, put on queue first, then turn it to color value
  const srcVal = image[sr][sc];
  const setTrack = new Set();
  setTrack.add([sr, sc].toString());

  const queue = [[sr, sc]];
  while (queue.length > 0) {
    const [row, col] = queue.pop();
    if (row !== sr || col !== sc) image[row][col] = color;

    const neighbors = findNeighbors(image, row, col, srcVal);
    for (let n of neighbors) {
      const [r, c] = n;
      if (!setTrack.has([r, c].toString())) {
        setTrack.add([r, c].toString());
        queue.push([r, c]);
      }
    }
  }

  image[sr][sc] = color;
  return image;
};

const findNeighbors = (matrix, row, col, srcVal) => {
  const neighbors = [];
  // up
  if (row > 0 && matrix[row - 1][col] === srcVal)
    neighbors.push([row - 1, col]);
  // right
  if (col < matrix[0].length - 1 && matrix[row][col + 1] === srcVal)
    neighbors.push([row, col + 1]);
  // down
  if (row < matrix.length - 1 && matrix[row + 1][col] === srcVal)
    neighbors.push([row + 1, col]);
  // left
  if (col > 0 && matrix[row][col - 1] === srcVal)
    neighbors.push([row, col - 1]);

  return neighbors;
};

// -------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/product-of-array-except-self/submissions/

var productExceptSelf = function (nums) {
  let acc = 1;
  let left = [1];
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0) {
      acc *= nums[i - 1];
      left.push(acc);
    }
  }

  acc = 1;
  let right = [1];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i !== nums.length - 1) {
      acc *= nums[i + 1];
      right.unshift(acc);
    }
  }

  console.log("LEFT", left);
  console.log("RIGHT", right);

  const res = [];
  let i = 0;
  while (i < nums.length) {
    res.push(left[i] * right[i]);
    i += 1;
  }

  return res;
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/guess-number-higher-or-lower/submissions/

var guessNumber = function (n) {
  let apiRes = guess(n);
  let left;
  let right;

  if (apiRes === 0) {
    return n;
  } else if (apiRes === -1) {
    // HIGHER
    const [leftB, rightB] = createBoundaries(n);
    left = leftB;
    right = rightB;
  } else {
    // LOWER
    const [leftB, rightB] = createBoundaries(_, n);
    left = leftB;
    right = rightB;
  }

  while (true) {
    const midPoint = Math.floor((left + right) / 2);
    const newApiRes = guess(midPoint);
    if (newApiRes === 0) {
      return midPoint;
    } else if (newApiRes === 1) {
      // lower
      left = midPoint + 1;
    } else {
      // higher
      right = midPoint - 1;
    }
  }
};

function createBoundaries(high, low) {
  if (low !== undefined) {
    // guess was lower
    return [low + 1, 100000]; // left bound, right bound
  } else {
    // guess was higher
    return [0, high - 1]; // left bound, right bound
  }
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/convert-a-number-to-hexadecimal/

var toHex = function (num) {
  if (num === 0) return "0";
  const totals = [];
  let result = "";
  let [isNegative, binaryString] = toBin(num);

  if (isNegative) {
    binaryString = twoComp(binaryString);
  }

  let count = 0;
  let index = 0;
  for (let i = 0; i < binaryString.length; i++) {
    if (index === 3) {
      if (binaryString[i] === "1")
        count += binaryValueAtIndex[index.toString()];
      totals.push(count);
      index = 0;
      count = 0;
    } else {
      if (binaryString[i] === "1")
        count += binaryValueAtIndex[index.toString()];
      index++;
    }
  }

  for (let i = 0; i < totals.length; i++) {
    result += decToHex[totals[i].toString()];
  }

  return result.replace(/^0+/, ""); // remove leading 0s
};

function toBin(decimal) {
  let binary = "";
  let isNeg = false;

  if (decimal < 0) {
    isNeg = true;
    decimal = Math.abs(decimal);
  }

  while (decimal > 0) {
    // divide decimal by 2 until it reaches 0 (or less)
    // if decimal has a remainder, turn on the bit, if not, make it 0
    if (decimal % 2 == 1) {
      binary = "1" + binary;
    } else {
      binary = "0" + binary;
    }
    // divide number by 2.
    decimal = Math.floor(decimal / 2);
  }

  while (binary.length < 32) {
    binary = "0" + binary;
  }

  if (isNeg) {
    // if neg, turn the leftmost to a 1
    binary = binary.split("");
    binary[0] = "1";
    binary = binary.join("");
  }
  return isNeg ? [true, binary.split("")] : [false, binary.split("")];
}

function twoComp(binaryString) {
  // INVERT BITS
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "0") {
      binaryString[i] = "1";
    } else {
      binaryString[i] = "0";
    }
  }

  // ADD 1
  let carry = 1;
  for (let i = binaryString.length - 1; i >= 0; i--) {
    let res = Number(binaryString[i]) + carry;
    if (carry === 0) res = 0;

    if (res === 2) {
      binaryString[i] = "0";
      carry = 1;
    } else if (res === 1) {
      binaryString[i] = "1";
      carry = 0;
    }
  }

  binaryString[0] = "1"; // flip the signed bit

  return binaryString;
}

const binaryValueAtIndex = {
  0: 8, // index 0 --> 8  (1000)
  1: 4, // index 1 --> 4  (0100)
  2: 2, // index 2 --> 2  (0010)
  3: 1, // index 3 --> 1  (0001)
};

const decToHex = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: "a",
  11: "b",
  12: "c",
  13: "d",
  14: "e",
  15: "f",
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

var checkPerfectNumber = function (num) {
  if (num <= 1) {
    return false;
  }

  let divisorsSum = 1; // Start with 1 as all numbers are divisible by 1

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisorsSum += i;
      if (i !== num / i) {
        // Avoid counting the same divisor twice
        divisorsSum += num / i;
      }
    }
  }

  return divisorsSum === num;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/detect-capital/

var detectCapitalUse = function (word) {
  let hasLower = false;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      hasLower = true;
    }
  }

  if (!hasLower) {
    // if no lower, return true  (CASE 1)
    return true;
  }

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) return false;
  }

  return true;
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/student-attendance-record-i/

var checkRecord = function (s) {
  let absentCount = 0;
  let lateViolation = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") absentCount++;

    if (
      s[i] === "L" &&
      s[i + 1] &&
      s[i + 1] === "L" &&
      s[i + 2] &&
      s[i + 2] === "L"
    ) {
      lateViolation = true;
    }
  }

  if (absentCount >= 2 || lateViolation) {
    return false;
  } else {
    return true;
  }
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/robot-return-to-origin/

var judgeCircle = function (moves) {
  let r = 0;
  let c = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U") {
      r = r - 1;
    }

    if (moves[i] === "L") {
      c = c - 1;
    }

    if (moves[i] === "D") {
      r = r + 1;
    }

    if (moves[i] === "R") {
      c = c + 1;
    }
  }

  return r === 0 && c === 0;
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// https://leetcode.com/problems/reverse-string-ii/submissions/1162943253/

var reverseStr = function (s, k) {
  const stringArr = s.split("");
  let result = "";

  let swap = true;
  let cooldown = k * 2; // cooldown is k * 2 because I need to account for swapping and non-swapping index's to properly keep track of when I need to swap

  for (let i = 0; i < stringArr.length; i++) {
    if (cooldown <= 0) {
      swap = true;
      cooldown = k * 2;
    }

    if (swap) {
      const segment = stringArr.slice(i, i + k); // slice the proper segment, reverse it, and append it
      result += segment.reverse().join("");
      swap = false;
    }

    if (!swap) {
      cooldown--;
      if (cooldown < k) {
        // this is necessary to we dont duplicate the swaped letters to the result string (only concerned with the lower half of k)
        result += stringArr[i];
      }
    }
  }

  return result;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// https://leetcode.com/problems/reshape-the-matrix/submissions/1162976566/

var matrixReshape = function (mat, r, c) {
  let eleCount = 0;
  const fill = [];

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    for (let j = 0; j < row.length; j++) {
      eleCount++;
      fill.push(row[j]);
    }
  }

  if (eleCount !== r * c) return mat;

  const reshape = [];
  let indexForFill = 0;

  for (let i = 0; i < r; i++) {
    reshape[i] = [];
    for (let j = 0; j < c; j++) {
      reshape[i][j] = fill[indexForFill];
      indexForFill++;
    }
  }

  return reshape;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// https://leetcode.com/problems/counter/

var createCounter = function (n) {
  let count = n;
  return function () {
    count++;
    return count - 1;
  };
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/is-object-empty/submissions/1164194107/

var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    if (obj.length <= 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (Object.keys(obj).length <= 0) {
      return true;
    } else {
      return false;
    }
  }
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/to-be-or-not-to-be/

var expect = function (val) {
  const test = {
    toBe: function (value) {
      if (value === val) {
        return true;
      } else {
        throw "Not Equal";
      }
    },

    notToBe: function (value) {
      if (value !== val) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };

  return test;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// https://leetcode.com/problems/filter-elements-from-array/

var filter = function (arr, fn) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) || fn(arr[i], i)) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/number-of-segments-in-a-string/submissions/1164469397/

var countSegments = function (s) {
  if (s.length === 0) return 0; // if empty string, return 0 segments
  s = s.trim(); // trim the string of white space

  let segmentCount = 0; // keep track of segments
  const sArr = s.split(" "); // split into an array for each space to make it more digestable

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i].length !== 0) {
      // only count segments that dont consist of whitespace
      segmentCount++;
    }
  }

  return segmentCount;
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/valid-sudoku/submissions/1166874792/

var isValidSudoku = function (board) {
  const rowsGood = checkRows(board);
  const colsGood = checkCols(board);
  const sectionsGood = checkSections(board);
  return rowsGood && colsGood && sectionsGood;
};

function checkSections(board) {
  const sections = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
  };

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (i <= 2) {
        // sections 0-2
        if (j <= 2) {
          sections["0"].push(row[j]);
        } else if (j > 2 && j <= 5) {
          sections["1"].push(row[j]);
        } else {
          sections["2"].push(row[j]);
        }
      } else if (i > 2 && i <= 5) {
        // sections 3-5
        if (j <= 2) {
          sections["3"].push(row[j]);
        } else if (j > 2 && j <= 5) {
          sections["4"].push(row[j]);
        } else {
          sections["5"].push(row[j]);
        }
      } else {
        // sections 6-8
        if (j <= 2) {
          sections["6"].push(row[j]);
        } else if (j > 2 && j <= 5) {
          sections["7"].push(row[j]);
        } else {
          sections["8"].push(row[j]);
        }
      }
    }
  }

  for (key in sections) {
    const sector = sections[key];
    const setCheck = new Set();
    for (let i = 0; i < sector.length; i++) {
      if (sector[i] !== ".") {
        if (!setCheck.has(sector[i])) {
          setCheck.add(sector[i]);
        } else {
          return false;
        }
      }
    }
  }

  return true;
}

function checkRows(board) {
  for (let i = 0; i < board.length; i++) {
    const setCheck = new Set();
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] !== ".") {
        if (!setCheck.has(row[j])) {
          setCheck.add(row[j]);
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

function checkCols(board) {
  const columns = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] !== ".") {
        columns[j.toString()].push(row[j]);
      }
    }
  }
  for (let col in columns) {
    const column = columns[col];
    const setCheck = new Set();
    for (let i = 0; i < column.length; i++) {
      if (!setCheck.has(column[i])) {
        setCheck.add(column[i]);
      } else {
        return false;
      }
    }
  }
  return true;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

function luckBalance(k, contests) {
  let luck = 0; // keep track of luck balance
  let numImpContests = 0; // use this to determine how many contests we must win
  const contestPointTracker = {}; // use this to determine which contests Lucy should win first to give her the most luck possible

  for (let i = 0; i < contests.length; i++) {
    const [luckR, important] = contests[i];
    luck += luckR; // initially count every contest luck points

    if (important !== 0) {
      // if important, add to tracker
      numImpContests++;
      if (!contestPointTracker[luckR.toString()]) {
        contestPointTracker[luckR.toString()] = 1;
      } else {
        contestPointTracker[luckR.toString()]++;
      }
    }
  }

  let mustWin = numImpContests - k; // determine how many contests lucy MUST win
  while (mustWin > 0) {
    let leastWinPoints = Infinity; // avoids having to splice
    for (let key in contestPointTracker) {
      // determine the least signficant win cost to Lucy's luck poitns
      const luckR = Number(key);
      if (luckR < leastWinPoints && contestPointTracker[key] !== 0) {
        leastWinPoints = luckR;
      }
    }
    luck -= leastWinPoints * 2; // since we initially counted everything, need to subtract the value twice
    contestPointTracker[leastWinPoints.toString()]--;
    mustWin--;
    leastWinPoints = Infinity;
  }

  return luck;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/game-of-life/submissions/1168971727/

var gameOfLife = function (board) {
  const nextGeneration = [];

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      const oneCount = neighbors(board, r, c);
      if (board[r][c] === 1) {
        if (oneCount < 2) {
          nextGeneration.push(0);
        } else if (oneCount >= 2 && oneCount < 4) {
          nextGeneration.push(1);
        } else {
          nextGeneration.push(0);
        }
      } else {
        if (oneCount === 3) {
          nextGeneration.push(1);
        } else {
          nextGeneration.push(0);
        }
      }
    }
  }

  let i = 0;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      board[r][c] = nextGeneration[i];
      i++;
    }
  }
};

function neighbors(board, r, c) {
  let oneCount = 0;

  // up - up right - up left
  if (board[r - 1] !== undefined) {
    if (board[r - 1][c] !== undefined && board[r - 1][c] === 1) oneCount++;
    if (board[r - 1][c - 1] !== undefined && board[r - 1][c - 1] === 1)
      oneCount++;
    if (board[r - 1][c + 1] !== undefined && board[r - 1][c + 1] === 1)
      oneCount++;
  }

  // down - down left - down right
  if (board[r + 1] !== undefined) {
    if (board[r + 1][c] !== undefined && board[r + 1][c] === 1) oneCount++;
    if (board[r + 1][c - 1] !== undefined && board[r + 1][c - 1] === 1)
      oneCount++;
    if (board[r + 1][c + 1] !== undefined && board[r + 1][c + 1] === 1)
      oneCount++;
  }

  // right
  if (board[r][c + 1] !== undefined && board[r][c + 1] === 1) oneCount++;
  // left
  if (board[r][c - 1] !== undefined && board[r][c - 1] === 1) oneCount++;

  return oneCount;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/gas-station/?envType=featured-list&envId=top-interview-questions?envType=featured-list&envId=top-interview-questions

var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0; // if gas >= cost, a solution must exist
  let totalCost = 0; // if cost > gas, a solution cant exist

  let currentGas = 0;
  let startStation = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];

    currentGas += gas[i] - cost[i];
    if (currentGas < 0) {
      // if gas ever dips below 0, we not that the starting station hasnt been found yet, so assign it the next possible starting point which is i + 1
      startStation = i + 1;
      currentGas = 0; // reset your gas
    }
  }

  return totalGas >= totalCost ? startStation : -1; // if a solution exists, return startStation, else, -1
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/repeated-dna-sequences/?envType=featured-list&envId=top-interview-questions%3FenvType%3Dfeatured-list&envId=top-interview-questions

var findRepeatedDnaSequences = function (s) {
  const DNAStrands = new Set();
  const repeating = [];

  for (let i = 0; i < s.length; i++) {
    const dnaSlice = s.slice(i, i + 10); // represents every possible DNA strand combo with a length of 10 inside of s string
    if (dnaSlice.length === 10) {
      if (!DNAStrands.has(dnaSlice)) {
        // add the combinations to a set
        DNAStrands.add(dnaSlice);
      } else {
        if (!repeating.includes(dnaSlice)) {
          // if the combo has already appeared more than once, add it to repeating (if not already in repeating)
          repeating.push(dnaSlice);
        }
      }
    }
  }

  return repeating;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

function kangaroo(x1, v1, x2, v2) {
  let startPosKang1 = x1 + v1;
  let startPosKang2 = x2 + v2;
  for (let i = 0; i < 10000; i++) {
    if (startPosKang1 === startPosKang2) {
      return "YES";
    } else {
      startPosKang1 += v1;
      startPosKang2 += v2;
    }
  }
  return "NO";
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

const possibilities = [
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
];

const transformCost = (sources, targets) => {
  let result = 0;
  sources.forEach((numbers, i) => {
    numbers.forEach((numb, j) => {
      result += Math.abs(numb - targets[i][j]);
    });
  });
  return result;
};

function formingMagicSquare(s) {
  // Write your code here
  let final = -1;
  possibilities.forEach((pos, i) => {
    let tmpCost = transformCost(s, pos);
    if (final === -1 || tmpCost < final) final = tmpCost;
  });
  return final;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  const tracker = {};
  let firstIndex = null;
  let secondIndex = null;

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (tracker[difference] === undefined) {
      tracker[difference] = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString() in tracker && i !== tracker[nums[i.toString()]]) {
      firstIndex = tracker[nums[i.toString()]];
      secondIndex = i;
      break;
    }
  }

  return [firstIndex, secondIndex];
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const element = tokens[i];
    if (element === "+") {
      // if we are dealing with any of the 4 operations (+ - / *), pop the two previous numbers from stack, perform the operation, then push to the stack
      stack.push(stack.pop() + stack.pop());
    } else if (element === "-") {
      const x = stack.pop();
      const y = stack.pop();
      stack.push(y - x);
    } else if (element === "/") {
      const x = stack.pop();
      const y = stack.pop();
      stack.push(Math.trunc(y / x));
    } else if (element === "*") {
      stack.push(stack.pop() * stack.pop());
    } else {
      stack.push(Number(element)); // if element is a number and not an operation, push it to the stack
    }
  }

  return stack[0];
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/brick-wall/

var leastBricks = function (wall) {
  // the sum of each row at each element represents the an edge where you can pass between the bricks in that row
  // so the crux of this problem is finding the most frequent edge, so we can draw a line that will pass through the most bricks
  // 1.) initiate a frequency object to keep track of edges for each row of bricks
  // 2.) populate the frequency object with a nested for loop, going through each row, added to the edge if exists, or creating its KVP if it doesnt exist
  // 3.) loop through each edge, find the most frequent edge
  // 4.) once we have the most frequent edge (most passes possible), subtract the frequency from the wall's length (height)
  // return (nRows - nAvoided) ---> represents the minimum number of bricks needed to cross THROUGH
  const frequency = {};
  let best = 0;

  for (let i = 0; i < wall.length; i++) {
    const row = wall[i];
    let rowSum = 0;
    for (let j = 0; j < row.length - 1; j++) {
      // note that its (length - 1)... this is because we dont count the last edge, since we would ALWAYS pass through the brick
      rowSum += row[j];
      if (frequency[rowSum] === undefined) {
        frequency[rowSum] = 1;
      } else {
        frequency[rowSum]++;
      }
    }
  }

  for (let key in frequency) {
    if (frequency[key] > best) {
      best = frequency[key];
    }
  }

  return wall.length - best;
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/daily-temperatures/description/

var dailyTemperatures = function (temperatures) {
  const result = new Array(temperatures.length).fill(0); // Provides us a default value for each day --> '0'
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      // if the temp we are at is GREATER than the temp on top of our stack, we need to do something...
      const [temp, index] = stack.pop();
      const nDays = i - index; // use the OG index and the i we are currently at to find the total number of days passed
      result[index] = nDays; // key directly into the index on that day to assign the number of days that have passed
    }
    stack.push([temperatures[i], i]); // each iteration, a new temp goes on to the stack. we keep a ref to its original index to compare nDays
  }

  return result;
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  for (let i = 0; i < matrix.length; i++) {
    const midIndex = Math.floor((left + right) / 2);

    if (matrix[midIndex][0] === target) {
      return true;
    } else if (matrix[midIndex][0] > target) {
      // not in this array, go right
      right--;
    } else if (matrix[midIndex][matrix[midIndex].length - 1] === target) {
      return true;
    } else if (matrix[midIndex][matrix[midIndex].length - 1] < target) {
      // not in this array, go left
      left++;
    } else {
      for (let j = 0; j < matrix[midIndex].length; j++) {
        // SHOULD be located inside this array, IF target exists
        if (matrix[midIndex][j] === target) {
          return true;
        }
      }
      break; // if it wasnt found at this point, break from loop... no point in contining our binary search
    }
  }

  return false;
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/koko-eating-bananas/

var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left !== right) {
    // we are finding a single value, that being minimum k speed koko needs to eat bananas
    const k = Math.floor((left + right) / 2);
    const totalHoursSpentEating = findTotalHoursFromK(k, piles);

    if (totalHoursSpentEating <= h) {
      // koko has time to spare,  (<= <-- since greater than OR equal, just assign to k and not k - 1)
      right = k; // not right = k - 1  since k could still be the answer, so dont exclude it
    } else if (totalHoursSpentEating > h) {
      // koko needs more time
      left = k + 1;
    }
  }

  return left;
};

function findTotalHoursFromK(k, piles) {
  let totalHours = 0;
  for (let i = 0; i < piles.length; i++) {
    totalHours += Math.ceil(piles[i] / k);
  }
  return totalHours;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    } else if (a[i] === b[i]) {
      // nothing
    }
  }

  return [alice, bob];
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

function aVeryBigSum(ar) {
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zero++;
    }
  }

  console.log(Number.parseFloat(pos / arr.length).toFixed(6));
  console.log(Number.parseFloat(neg / arr.length).toFixed(6));
  console.log(Number.parseFloat(zero / arr.length).toFixed(6));
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

function birthdayCakeCandles(candles) {
  const maxCandle = Math.max(...candles);
  let canBlowOut = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxCandle) canBlowOut++;
  }

  return canBlowOut;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  arr = sortedArr;

  let min = 0;
  let max = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }

  for (let i = arr.length - 1; i > 0; i--) {
    max += arr[i];
  }

  console.log(min, max);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

function migratoryBirds(arr) {
  const birdWatch = {};

  for (let i = 0; i < arr.length; i++) {
    if (birdWatch[arr[i]]) {
      birdWatch[arr[i]]++;
    } else {
      birdWatch[arr[i]] = 1;
    }
  }

  let max = [-Infinity, Infinity];
  //             num       id

  for (let key in birdWatch) {
    const [num, id] = max;

    console.log("SIGHTINGS", birdWatch[key]);
    console.log("BIRD ID", Number(key));

    if (birdWatch[key] === num && Number(key) < id) {
      max = [birdWatch[key], key];
    }

    if (birdWatch[key] > num) {
      max = [birdWatch[key], key];
    }
  }

  return Number(max[1]);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------- //

function gradingStudents(grades) {
  const results = grades.map((p) => {
    if (p < 38) return p;
    const modulus = p % 5;
    return modulus >= 3 ? p + (5 - modulus) : p;
  });

  return results;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/minimum-depth-of-binary-tree/

var minDepth = function (root) {
  if (!root) return 0;

  let count = 1;
  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      // level 2 --->     (2) -- (3)
      let curr = queue.shift();

      if (!curr.right && !curr.left) {
        return count;
      }

      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }

    count++;
  }
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/largest-number/

var largestNumber = function (nums) {
  const sorted = nums.sort((a, b) => {
    const firstPos = Number(a.toString() + b.toString());
    const secondPos = Number(b.toString() + a.toString());

    if (firstPos > secondPos) {
      return -1;
    } else {
      return 1;
    }
  });

  console.log(sorted);
  const result = sorted.join("");
  return result[0] === "0" ? "0" : result;
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;

  let cheapest = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < cheapest) {
      cheapest = prices[i];
    }

    const profit = prices[i] - cheapest;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// https://leetcode.com/problems/same-tree/

function isSameTree(p, q) {
  if (!p && !q) return true; // base case - if p and q are both null ---> return true
  if ((p && !q) || (!p && q)) return false; // if no p but q, or if no q but p ---> return false
  if (p.val !== q.val) return false; // if p.val does not match q.val, return false

  const left = isSameTree(p.left, q.left); // check left subtrees
  const right = isSameTree(p.right, q.right); // check right subtrees

  return left && right; // return if left and right match
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/diameter-of-binary-tree/

var diameterOfBinaryTree = function (root) {
  let maxD = 0;

  const dft = (root) => {
    if (!root) {
      return 0; // 1.) bottom out the tree with DFT
    }

    const left = dft(root.left);
    const right = dft(root.right);

    maxD = Math.max(maxD, left + right); // 3.) use the height to calculate maxD of every subtree throughout the callstack

    return 1 + Math.max(left, right); // 2.) calculate height (bottom up)
  };

  dft(root);
  return maxD;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// https://leetcode.com/problems/invert-binary-tree/

var invertTree = function (root) {
  function dft(root) {
    if (!root) return;

    const left = root.left;
    const right = root.right;

    root.left = right;
    root.right = left;

    dft(root.left);
    dft(root.right);
  }

  dft(root);
  return root;
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/balanced-binary-tree/

var isBalanced = function (root) {
  let isBalanced = true;

  function dfs(root) {
    if (!root) {
      return 0; // 1.) bottom out the tree, height of nodes at bottom of tree are 0
    }

    const left = dfs(root.left);
    const right = dfs(root.right);

    if (Math.abs(left - right) > 1) isBalanced = false; // 3.) determine if all subtrees are balanced (abs diff under 1) once you have the height of the left and right subtrees
    return 1 + Math.max(left, right); // 2.) calculate the max height from any given node/subtree
  }

  dfs(root);
  return isBalanced;
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

var isSubtree = function (root, subRoot) {
  let subTreeFound = false;

  function traverse(node) {
    if (!node) return;

    const isSubTreeEqual = dfs(node, subRoot); // 2.) at each node, perform its own dfs traversal, comparing subtree to subRoot (both in structure and value)
    if (isSubTreeEqual) subTreeFound = true; // check if the subtree was found

    traverse(node.left);
    traverse(node.right);
  }

  traverse(root); // 1.) traverse the entire main tree
  return subTreeFound;
};

function dfs(node, subRoot) {
  if (!node && !subRoot) return true;
  if (!node && subRoot) return false; // return false if mismatch
  if (node && !subRoot) return false; // return false if mismatch
  if (node.val !== subRoot.val) return false; // return false if mismatch

  const left = dfs(node.left, subRoot.left);
  const right = dfs(node.right, subRoot.right);

  return left && right;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/


var lowestCommonAncestor = function(root, p, q) {
    let deepestHeight = Infinity; // if a subTree fits, this will get reassigned if the height is deeper than the previous node found
    let resultNode = null; // represents the deepest subtree that includes both p and q

    const pVal = p.val // keep track of the initial value of p
    const qVal = q.val // keep track of the initial value of q
    let pFound = false
    let qFound = false

    function depthOfCurrNode(node) {
        if(!node) {
            return 0
        }

        if(node.val === pVal) pFound = true
        if(node.val === qVal) qFound = true

        const left = depthOfCurrNode(node.left)
        const right = depthOfCurrNode(node.right)
        return 1 + Math.max(left, right)
    }

    function traverse(rootNode) {
        if(!rootNode) return

        const depth = depthOfCurrNode(rootNode) // 2.) FIND DEPTH OF CURRENT SUBTREE
        if( (pFound && qFound) && (depth < deepestHeight) ) { // 3.) if p and q are decesdants from this tree, and this node was found deeper in the tree
            deepestHeight = depth
            resultNode = rootNode
        }

        pFound = false // reset before traversing next subtree
        qFound = false // reset before traversing next subtree

        traverse(rootNode.left)
        traverse(rootNode.right)
    }

    traverse(root) // 1.) TRAVERSE ENTIRE TREE
    return resultNode

};
