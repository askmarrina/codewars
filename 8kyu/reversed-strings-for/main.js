// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        newString = str.split('').reverse().join('');
    }
    return newString;
}

console.log(solution('hello'))