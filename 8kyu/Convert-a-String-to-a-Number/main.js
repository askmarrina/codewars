// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
//     Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
//
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function(str){
    // put your code here
    let result = Number(str);
    return result
}

console.log(stringToNumber('1234'))
console.log(stringToNumber('-7'))