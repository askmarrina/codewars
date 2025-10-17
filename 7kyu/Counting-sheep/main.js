// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,
//
//     [true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined




function countSheeps (array) {
    let result = 0;
    let trueArray = [];
    for (let i=0; i<array.length; i++) {

        if (array[i] === true) {
            trueArray.push(array[i]);
        }

    }
    return result = trueArray.length;
}

console.log(countSheeps([true,  true,  true,  false,
       true,  true,  true,  true ,
         true,  false, true,  false,
         true,  false, false, true ,
         true,  true,  true,  true ,
         false, false, true,  true]))

// function countingSheeps(array) {
//   return array.filter(x => x === true).length;
// }