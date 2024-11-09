// let score = 33 ==> number
// let score = "33" ==> number
// let score = "33abc" ==> Nan
//let score = null ==> 0
//let score = undefined ==> NaN
// let score = true ==> 1
// let score = "vedik" ==> NaN
/*
let score = "33"
console.log(typeof score)
console.log(typeof (score))

let valueInnumber = Number(score)
console.log(typeof valueInnumber);

console.log(valueInnumber) ; //NaN NOT A NUMBER


let isloggedIn = 1
let booleanloggedIn = Boolean(1)

console.log(booleanloggedIn)


let someNumber = 33
 let stringNum= String(someNumber)
 console.log(stringNum)
 console.log(typeof stringNum) //the number gets converted to string
*/

 //******************************operations*************************************

let value = 3
let negativeVal = -value;
 //console.log(negativeVal)
 //console.log(typeof negativeVal)
/*
 console.log(2 + 2) ==> 4
 console.log(2 - 2)  ==> 0
 console.log(2 * 2) ==> 4
 console.log(2**2)  ==> 4
 console.log(2**3) ==> 8
 console.log(2 /3) ==>0.66666
 console.log(2%3) ==> 2
 
*/
let str1 = "vedik"
let str2 = "heyaaa"
let str3 = str1+str2
console.log(str3)

console.log("1" + 2) //==>12
console.log(1 + "2")// ==>12
console.log("1"+ 2 +2) // ===>122
console.log(1 + 3 + "4") //==> 44

console.log( 3 + 4*5 %3)

//ToPrimitive guidelines


let gamecounter = 100
gamecounter++;
++gamecounter
console.log(gamecounter)
