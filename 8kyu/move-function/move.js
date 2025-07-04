// ❓ DESCRIPTION
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// EXAMPLE:
// move(3, 6) should equal 15


// ✅ SOLUTION

function move (position, roll) {
    // return the new position
    let newPosition;
    if (roll >=1 && roll <= 6) {
        return newPosition = position + roll * 2;
    } else {
        return 'invalid roll';
    }
}

console.log(move(24,6));