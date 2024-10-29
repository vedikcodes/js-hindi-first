const marvel_heroes = ["thor" ,"ironman" , "spiderman" ,"captainamerica"]
const dc_heroes =["superman" , "flash" ,"batman"]

//marvel_heroes.push(dc_heroes) //here the dc heroes array will become a singe element in marvel heroes array
//console.log(marvel_heroes)
//console.log(marvel_heroes[4][1])

//const allHeroes =marvel_heroes.concat(dc_heroes) // this will concat the dc hereos array and marvel heroes array in a new array allHeroes
//console.log(allHeroes)

const all_new_heroes =[...marvel_heroes , ...dc_heroes]
//console.log(all_new_heroes)

const another_array = [1,2,3,[4 ,5,6] ,7 ,[6,7,[4,5]]]
const real_another_array =another_array.flat(Infinity) //flatten the nested arrays
console.log(real_another_array)

console.log(Array.isArray("vedik"))
console.log(Array.from("vedik")) // values created as array
console.log(Array.from({name :"vedik"})) //returns empty [] ....interesting for interveiw


let score1 =100
let score2 =200
let score3 = 300
 console.log(Array.of(score1 ,score2 , score3)) // makes [100,200,300]