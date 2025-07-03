// ❓ DESCRIPTION
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// EXAMPLE:
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// ✅ SOLUTION
function makeNegative(num) {
    // Code?
    let negative;
    if(num === 0) {
        return 0;
    } else {
        negative = -Math.abs(num);
        return negative;
    }

}

console.log(makeNegative(0.12));
