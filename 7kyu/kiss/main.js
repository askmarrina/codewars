function isKiss( words ){
    // Have Fun!

    let wordsArray = words.split(' ')

    for(let word of wordsArray) {
        if(word.length > wordsArray.length) {
            return "Keep It Simple Stupid"
        }
    }
    return 'Good work Joe!'
}

console.log(isKiss('Joe is having no fun'))

// second solution
function isKiss( words ){
    let arr = words.split(' ');
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > arr.length) return "Keep It Simple Stupid";
    }
    return "Good work Joe!";
}