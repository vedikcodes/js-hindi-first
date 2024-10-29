//singleton
//object literals

const mySym = Symbol("key1")
const JsUser ={
   name : "vedik ",
    age:18 ,
    [mySym]: "mykey1",
    location:"jabalpur",
    email:"vediktiwari@gmail.com",
    isLoggedIn : false ,
    lastLoginDays :["Monday" ,"Tuesday"]
} //object

 //console.log(JsUser.email)// both are same
// console.log(JsUser["email"]) //both are same
 //console.log(JsUser["full name"]) //can not be accessed by . operator
// console.log( JsUser[mySym])

 JsUser.email = "vedik2@gmail.com" //changing the value of the object
 //console.log(JsUser.email)
 //Object.freeze(JsUser) //freezes the Object so that no further changes occur
 JsUser.email = "vedik3@gmail.com"
  //console.log(JsUser.email) //nochanges occured
  //console.log(JsUser) 

  JsUser.greeting = function(){
    console.log("hello js user");
  }
  console.log(JsUser.greeting())

  JsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`); //using backtick `${}`
  }
  console.log(JsUser.greetingTwo())






