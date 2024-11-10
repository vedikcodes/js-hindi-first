//if
//const userLoggedIn =true
const temperature =41

//if( temperature < 30) {
  //  console.log("less than 30 deree celsius")
//}
//else {
  //  console.log("more than 30 degree celsius")
//}

//console.log("execute")

//const score = 200
//if(score > 100){
  //  const power = "fly "
    //console.log(`user power: ${power}`)
//}
//console.log(`user power: ${power}`) // end of scope for power but can be acessed with var but not use it



/*const balance =1000
//if(balance >500)console.log("test")
if(balance <500) {
    console.log("less than ")

}else if(balance < 750) {
    console.log("less than 750")
} else {
    console.log("more than and equal to 1000")
}*/

const userLoggedIn = true
const debitCard =true
const loggedInFromGoogle = false
const loggedInFromEmail =true

if(userLoggedIn && debitCard) {
    console.log("allow to buy course") 
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}