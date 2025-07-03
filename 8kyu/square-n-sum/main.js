// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    let sum=0;

    for (let i=0; i <numbers.length; i++) {
        const el = numbers[i];
        const squareEl = el ** 2 //возведение в квадрат
        console.log('iteration: ', i, 'squareEl', squareEl);
        sum = sum + squareEl;
    }
return sum;
}


console.log(squareSum([3,2,5]))

// let number = 5;
// let square = Math.pow(number, 2);
// console.log(square); // 25