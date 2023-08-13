// Define a variable and assign it to 0 to compare the other items of array
// Define an array to collect the max numbers of each array
// We need 2 for of loops. One of them for main array
// The other is for inner arrays
// Grab each item to compare with the variable max, if the item is greater than max then put that item in the variable
// After finish the inner for of loop push the final maz number to the empty array that we've made
// After finish main for loop return the array that has 4 max numbers of each array


const arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function largestOfFour(arr){
    let max = 0 ;
    const maxArr = [];
    for(let a of arr){
        for (let b of a){
            if(b>max){
                max = b;
            }
        }
        maxArr.push(max)
    }
    return maxArr;
}

console.log(largestOfFour(arr));