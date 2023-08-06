
// // const person = {
// //     firstName: "Pukar",
// //     lastName: "Gautam",
// //     fullname: function(){   // fullname: () => {} changed to fullname: function(){}  arrow function changed to normal
// //         return this.firstName + " " + this.lastName
// //         //while using ()=> we use object which is person for eg 
// //         //return person.firstName + " " + person.lastName
// //     }
// // }

// // const name = person.fullname()
// // const fname = person.firstName
// // const lname = person.lastName

// // console.log(name)
// // console.log(fname)
// // console.log(lname)


// //ES5 function

// const user = {
//     firstName: "Pukar",
//     lastName: "Gautam",
//     email: "gautam@gmail.com",
//     username: "gautampukar",
//     password: "12345",
//    fullname: function(){
//     return this.firstName + " " + this.lastName
//    },

//     signIn: (username, password) =>{
//         if(user.username === username && user.password === password){
//             return "You have logged in " + "Your username is \n" + user.username + " \n Your fullname is " + user.fullname()
//         }
//         else{
//             return "The username or password doesnot match. Please Input right credentials"
//         }
//     },
//     // isLoggedIn: (username, password)=>{
//     //     if(user.username === username && user.password === password){
//     //         return "Logged in Successfully"
//     //     }
//     // }
// }
// const newUsername = prompt("Enter Your Username")
// const newPassword = prompt("Enter Your Password")
// const checkLogin = user.signIn(newUsername, newPassword)
// console.log(checkLogin)

//Array
//to extract values in array a[0] = > items value.

// const arr = ["A", "b", "c", 46, {}, true, []]
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr.pop())
// arr.push("efgh")
// console.log(arr)

//Array methods : 
//length sort, push, pop
//map, find, filter, reduce, (IMMUTABLE JAVA SCRIPT)
//sort, concat, join, slice, splice, foreach


// const persons = [
//     {name: "ram", age: 54},
//     {name: "shyam", age: 24},
//     {name: "hari", age: 34},
//     {name: "gopal", age: 44},
//     {name: "suman", age: 34}
// ]



// const age = persons.sort((a,b) => a.age - b.age)

// console.log(age)

// const newPersons = persons.map(persons => persons.name) //Important array map final technique

// console.log({ newPersons })

// const find = persons.find(persons.name)

// console.log(find)
// Destructure

const persons = [
    {name: "ram", age: 54},
    {name: "shyam", age: 24},
    {name: "hari", age: 34},
    {name: "gopal", age: 44},
    {name: "suman", age: 34}
]

///... in destructure is spread operator(...) --- 
//for array use []//to destructure
//for object use {}
const  [first, ...rest ] = persons

console.log({ rest })