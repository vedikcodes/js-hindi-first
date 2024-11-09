function sayMyName() {
    console.log("v")
    console.log("e")
    console.log("d")
    console.log("i")
    console.log("k")


}
sayMyName()  //()executes

function addTwoNumbers(number1 , number2){ //parameters are the input while making a function definition
    let result =number1 + number2
    return result
}

const result =addTwoNumbers(3 , 4) // and here this is called arguments
//console.log("Result :" , result)

function loginUserMessage(username){
    if(username ===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("vedik"))

function calculateCartPrice(...num1) { // ... multiple values
    return num1
}

//console.log(calculateCartPrice(200 , 400 ,500))


const user ={
    username :"vedik",
    price :199
}

function handleObject(anyobject){
    console.log(`username is  ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

handleObject ({
    username: "sam",
    price :200
})

const myNewArray = [200 ,400 ,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))