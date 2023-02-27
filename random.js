
//get random elements from an array
function getRandomElements(arr, n) {
    // Create a copy of the input array to avoid modifying the original array
    const copyArr = Array.from(arr);
    
    // Shuffle the array (random returns 0=> num <1)
    copyArr.sort(function(){return .5 - Math.random()});
    // Return the first n elements of the shuffled array
    return copyArr.slice(0, n);
  }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  } 

module.exports = {
    getRandomElements,
    getRndInteger
}