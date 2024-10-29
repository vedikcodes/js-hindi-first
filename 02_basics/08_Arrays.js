// Arrays
const myArr = [0,1,2,3,4,5,6]
/*console.log(myArr[0]) //zero based indexing
const myHeroes = ["superman" , "captainAmerica"]
console.log(myHeroes)


 // ++++++++++++ Array methods ++++++++++++++
 myArr.push(6) // add a element to existin array
 console.log(myArr)

 myArr.pop() // delete the last element
 console.log(myArr)

 myArr.unshift(9) //put the value in as the first element and shift the existing elements
 console.log(myArr)

 myArr.shift() //same as pop but the first element get deleted
 console.log(myArr)


console.log(myArr.includes(9)) //true or false

console.log(myArr.index(3)) //find the index of an element if not exist returns -1

const newArr = myArr.join()
console.log(newArr) */

//Slice , Splice
console.log( "A", myArr)

const myn1 =myArr.slice(1,4) //Returns a copy of a section of an array.doesnt manipulate the original array
console.log(myn1)

console.log("B " , myArr) // [0,1,2,3,4 5,6]
const myn2 =myArr.splice(1,3) // it return a section of the original array by manipulating it 
console.log("C" ,myArr) // becomes [ 0, 4, 5, 6 ]
console.log(myn2) //[1,2,3]




