const user ={
    username:"vedik",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}
//user.welcomeMessage()
//user.username ="sneha"
//user.welcomeMessage()

//console.log(this)

//function chai(){
  //  console.log(this)
//}
//chai()

const chai = () => {
    let username = "vedik"
    console.log(this.username)
}
//chai()

const addtwo =(num1 , num2) =>  num1+num2 //implicit return


console.log(addtwo(3 ,6))

