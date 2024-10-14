//Stack and  Heap

/*-----> primitive type = stack memory
-----> non primitive type = heap memory */
 //stack
let myname = "vediktiwari";
let anotherName = myname
anotherName = "chaiaurcode"

console.log(myname) // return the different value because its only making a copy of the variable and not changing the original value 
console.log(anotherName);

//heap

let userOne = {
    email: "vediktiwari.com" ,
    upi : "user@byl"
}

let usertwo = userOne
usertwo.email = "rama@google.com"

console.log(userOne.email) // return the same value becaue its directly taking the reference and not the copy
console.log(usertwo.email)


