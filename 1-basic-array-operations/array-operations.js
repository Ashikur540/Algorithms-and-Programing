


//  ### Traversing an Array (Time Complexity: O(n))
/*
TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(1)
*/
const arr = [1, 2, 3, 4, 5];

//  using usual for loop
for (let i = 0; i < arr.length; i++) {
    console.log("for loop", arr[i]);
}

//  using forEach loop

arr.forEach((element) => {
    console.log("forEach Method", element);
})

//  using for of loop

for (const num of arr) {
    console.log("for of loop", num);
}

// --------------------------------------

//  ### Inserting an Element
/*
TIME COMPLEXITY: O(1)
SPACE COMPLEXITY: O(1)
*/
const arr2 = [1, 2, 4, 5, 6];

// insertion at the end of the array ( Time Complexity: O(1) )
arr2.push(7);
console.log(arr2);

// insertion at the beginning of the array ( Time Complexity: O(n) ) as we have to shift the elements to the right
arr2.unshift(0);
console.log(arr2);

// insertion at a specific index here we targeted the index 3 and added 3 at that index and 0 is the delete count. Time Complexity: O(n), as elements after the insertion point need to be shifted

arr2.splice(3, 0, 3);
console.log(arr2);

//  ### Deleting an Element
/*
TIME COMPLEXITY: O(1) for deletion at the end and O(n) for deletion at the beginning and at a specific index (because we have to shift elements and reorder)
SPACE COMPLEXITY: O(1) because we are not using any extra space to delete the element
*/
const arr3 = [1, 2, 3, 4, 5, 6, 7];

// deletion at the end of the array ( Time Complexity: O(1) ) 
arr3.pop();
console.log(arr3);

// deletion at the beginning of the array ( Time Complexity: O(n) ) as we have to shift the elements to the left
arr3.shift();
console.log(arr3);

// deletion at a specific index here we targeted the index 3 and deleted the element at that index. Time Complexity: O(n), as elements after the deletion point need to be shifted

arr3.splice(3, 1);
console.log(arr3);



//  ### Searching for an Element

//  Linear Search ( Time Complexity: O(n) )
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

let arr4 = [1, 3, 5, 7, 9];
let target = 5;

let result = linearSearch(arr4, target);
console.log(result);

// class Solution {
//     largestElement(nums) {
//         let max = nums[0];

//         // Traverse from second and compare
//         // every element with current max
//         for (let i = 1; i < nums.length; i++) {
//             if (nums[i] > max) max = nums[i];
//         }

//         return max;
//     }
// }


// const sn = new Solution()
// console.log(sn.largestElement([9, 7, 9, 932, 94,]));


// Find the largest number in the array without sorting

class Solution2 {
    secondLargestElement(nums) {
        if (nums.length < 2) {
            return -1; // Not enough elements
        }
        let fMax = -Infinity, sMax = -Infinity;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > fMax) {
                sMax = fMax
                fMax = nums[i]
            }
            else if (nums[i] < fMax && nums[i] > sMax) {
                sMax = nums[i]
            }

        }

        return sMax === -Infinity ? -1 : sMax;

    }
}



const sn2 = new Solution2()
console.log(sn2.secondLargestElement([20769, 19913, 16575, 16575]));


function arraySortedOrNot(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

console.log(arraySortedOrNot[10, 22, 20, 30, 40, 50])

