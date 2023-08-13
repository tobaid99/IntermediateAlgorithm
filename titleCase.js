// Split the str with the speace and put an array
// Create an empty array for the words that will be modified
// Loop for each letter of the word from array
// Do upper first letter and slice the rest and do them lower
// Push new words to empty array
// Return the new array after join them with speace

function titleCase(str){
    const words = str.split(" ");
    const upperWords =[];
    for(let w of words){
        w = w[0].toUpperCase() + w.slice(1).toLowerCase()
        upperWords.push(w)
    }
    return upperWords.join(" ")
}

console.log(titleCase("sHoRt AnD sToUt"));
