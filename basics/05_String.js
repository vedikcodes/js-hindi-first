const name = "vedik-vt"
const repoCount = 50
//console.log (name + repoCount + " vALUE");

//backTicks //stringinterpolattion
console.log(`hello my name is and my repo count is ${repoCount}`)

const gameNmae = new String('vedik - tiwari')

console.log(gameNmae[0]); //v
console.log(gameNmae[1]); //e
console.log(gameNmae[2]); //d
console.log(gameNmae[3]); //i

console.log(gameNmae._proto_);

console.log(gameNmae.length)
console.log(gameNmae.toUpperCase()) // convert the string into UPPERCASE
console.log(gameNmae.charAt(2)) // return the character at any index
console.log(gameNmae.indexOf('i')) // returns the index of a letter in a string


 const newString = gameNmae.substring(0,4)
 console.log(newString)
 const fewString = gameNmae.substring(0,3) // returns a substring 
 console.log(fewString)

 const anotherString = gameNmae.slice(-8,2)
 console.log(anotherString);

 const newStringOne = "  vedik  "
 console.log(newStringOne)
 console.log(newStringOne.trim()) // remove the unnecessary space before and after a string

const url = "https://vedik.com/vedik%20tiwari"
console.log(url.replace('%20' , '_')) // replace something with another thing

console.log(url.includes('tiwari')) //returns either true or false

console.log(gameNmae.split('-')) //splits the string in an array based on a certain element like here "-"


