// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

let obj = {
    name: 'Ilyushka',
    age: 31,
}
function addProperty(obj, prop, value) {
    // Add your code here
    for(let key in obj) {
        if(key === prop) {
            throw new Error('Property is already exists')
        }
    }
    obj[prop] = value;
    return obj;

}

console.log(addProperty(obj, 'surname', 'Ozhoh'))
console.log(addProperty(obj, 'surname', 'Ozhoh'))