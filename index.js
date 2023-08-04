
// const person = {
//     firstName: "Pukar",
//     lastName: "Gautam",
//     fullname: function(){   // fullname: () => {} changed to fullname: function(){}  arrow function changed to normal
//         return this.firstName + " " + this.lastName
//         //while using ()=> we use object which is person for eg 
//         //return person.firstName + " " + person.lastName
//     }
// }

// const name = person.fullname()
// const fname = person.firstName
// const lname = person.lastName

// console.log(name)
// console.log(fname)
// console.log(lname)


//ES5 function

const user = {
    firstName: "Pukar",
    lastName: "Gautam",
    email: "gautam@gmail.com",
    username: "gautampukar",
    password: "12345",
   fullname: function(){
    return this.firstName + " " + this.lastName
   },

    signIn: (username, password) =>{
        if(user.username === username && user.password === password){
            return "You have logged in " + "Your username is \n" + user.username + " \n Your fullname is " + user.fullname()
        }
        else{
            return "The username or password doesnot match. Please Input right credentials"
        }
    },
    // isLoggedIn: (username, password)=>{
    //     if(user.username === username && user.password === password){
    //         return "Logged in Successfully"
    //     }
    // }
}
const newUsername = prompt("Enter Your Username")
const newPassword = prompt("Enter Your Password")
const checkLogin = user.signIn(newUsername, newPassword)
console.log(checkLogin)



