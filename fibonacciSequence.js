// Create a function that takes a number as parameter
// Define 3 variables.
// x represents the first number
// y represents the second number
// z represents sum x and y
// Create loop from 1
// Return result 

function fibonacci(num){
    let x = 0;
    let y =1;
    let z ;
    for(let i=1;i<num;i++){
        z = x+y;
        x = y;
        y = z;
    }
    return y
}
console.log(fibonacci(4));

