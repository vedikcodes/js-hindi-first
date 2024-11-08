//const tinderUser = new Object()
const tinderUser = {} //both are same
 tinderUser.id = "123abc"
tinderUser.name= "sammy"
tinderUser.isLoggedIn =false

//console.log(tinderUser); //empty file 

//object under object
const regularUser ={
    email:"some@gmail.com",
    fullname: {
        userfullname : {
            firstname :"vedik",
            lastname: "tiwari"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    4:"b"
}
const obj4 ={
    5:"a",
    6:"b"
}

//const obj3 = {obj1 ,obj2}
//const obj3 =Object.assign({} ,obj1 , obj2 , obj4)

const obj3 ={...obj1, ...obj2}
//console.log(obj3)

const users ={
    id:1,
    email:"h@gmail.com"
}

 // object destructuring

 const course ={
    coursename : "javascript",
    price :"999",
    courseInstructor:"hitesh"
 }

 const{courseInstructor:instruct} =course
 console.log(instruct)

 //JSON API

 [
    {},
    {},
    {}
]





