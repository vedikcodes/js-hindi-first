//primitive datatype 
/*7 types
string
Number
Boolean
null
undefined
symbol
bigint
*/

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

 const bigNumber = 3243567489949499n //big int

//reference type/ Non-primitive datatype
/* Arrays
   Objects
   Functions
*/


const heroes =["shaktiman" , "nagraj" , "vikraal"]


 let myObj ={
   name:"vedik" ,
   age:22,
}

const myFunction =function(){
   console.log("hello universe");
}

console.log(typeof bigNumber ) //bigint
console.log(typeof outsideTemp) //object
console.log(typeof heroes); //object
console.log(typeof myFunction) //function
console.log(typeof myObj) //object
console.log(typeof isLoggedIn) //boolean



