

if(true){
//let a= 10
//const b= 20
var c=30
}


//console.log(a)
//console.log(b)
//console.log(c)

function one() {
    const username = "vedik"

    function two() {
        const website = "youtube"
        //console.log(username)
    }
    //console.log(website)
    two()
}
one()

if(true) {
    const username ="vedik"
    if(username ==="vedik") {
        const website = "yootube"
        console.log(username + website)
    }
    //console.log(website) //wont be accessed
}
//console.log(username) //cant be accessed

// +++++++++++++++++++++++ interesting +++++++++++++++++++++++++++


function addone(value) {
    return value+1
}
addone(5)


const addtwo = function(value){  //expression
    return value +2
}
console.log(addtwo(5))