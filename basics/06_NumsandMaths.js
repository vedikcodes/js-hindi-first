const score =400
const balance  = new Number(100)
console.log(balance)


console.log(balance.toString()); //converts to string
console.log(balance.toString().length) //return the length of the string
console.log(balance.toFixed(2)) //precision value here upto two decimal points

const otherNumber=23.8999
console.log(otherNumber.toPrecision(3)) //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.


const hundreds =1000000
console.log(hundreds.toLocaleString()) // gives commas according to us standard
console.log(hundreds.toLocaleString('en-IN')) //give commas according to indian values

//++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++

 
console.log(Math)
console.log(Math.abs(-4)) //Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
console.log(Math.round(4.3)) //roundoff number
console.log(Math.ceil(4.3)) // higher number
console.log(Math.floor(4.9)) //smaller number
console.log(Math.min(4,3,5,6,7))
console.log(Math.max(9,10,5,6,7,8))
console.log(Math.random()) //eturns a pseudorandom number between 0 and 1.
console.log((Math.random()*10)+1)

const min = 10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min)









