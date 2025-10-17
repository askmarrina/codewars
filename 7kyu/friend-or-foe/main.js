// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
//     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]
//
// Input = ["Peter", "Stephen", "Joe"]
// Output = []

function friend(friends){
    //your code here
    let trueFriends = [];
    for (let i = 0; i < friends.length; i++){
        if(friends[i].length === 4) {
            trueFriends.push(friends[i]);
        }
    }
    return trueFriends;
}

console.log(friend(["Peter", "Stephen", "Joe"]))

//
// function friend(friends){
//     return friends.filter(n => n.length === 4)
// }