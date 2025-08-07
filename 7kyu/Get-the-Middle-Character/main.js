// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
//     If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
//     "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(word) {
    //Code goes here!

    let length = word.length;
    let mid = Math.floor(word.length / 2)
    if (word.length %2 === 0) {
        return word[mid - 1] + word[mid];
    } else {
        return word[mid];
    }
    // return '';
}

console.log(getMiddle('A'))