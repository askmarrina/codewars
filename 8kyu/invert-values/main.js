// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//     [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
//     [] --> []

function invert(array) {
    const invertArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element === 0) {
            invertArray.push(0);
        } else {
            const invertEl = -element;
            invertArray.push(invertEl);
        }

    }

    return invertArray;

}

console.log(invert([0]));