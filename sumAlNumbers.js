

// Create a function
// Define 3 variables, one of them is for sum, the others are for value in array
// If first value of array greater than second, assign b to first value,a to second
// Else, assign a to first value,b to second
// Creat a for loop from a to b, each loop,add the value to sum
// Return the sum

function sumAllNumbersinArray(arr){
    let sum=0;
    if(arr[0]>arr[1]){
        a = arr[1]
        b = arr[0]
    } else {
        a= arr[0]
        b= arr[1]
    }
    for(let i= a; i<=b ; i++){
        sum += i;
    } 
    return sum
}

console.log(sumAllNumbersinArray([4,4]));