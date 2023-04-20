// arrays destructuring

let fruits = ['Apple', 'Banana']
let [a, b] = fruits
console.log(a,fruits[1])

// Object destructuring

let user = {username: 'Oscar', age: 34}

let {age, username} = user

console.log(username, user.age);