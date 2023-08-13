// Split the string with speace
// Define a new variable max and assign it to 0
// Loop for new array and compare the length of the current word with max
// If the length is gretar than max, assign to max
// return the final max value

function findLongestWord(str){
    let max = 0;
    const words = str.split(" ");
    for (let w of words){
        if(w.length > max){
            max = w.length;
        }
    }
    return max
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));