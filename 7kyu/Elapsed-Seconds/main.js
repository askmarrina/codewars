const start = new Date()
const end = new Date()

function elapsedSeconds(start, end) {
    return (end - start) / 1000
}

console.log(elapsedSeconds(start, end))