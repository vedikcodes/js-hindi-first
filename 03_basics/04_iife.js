//Immediately Invoked Function Expression(IIFE)

(function chai() {
    console.log(`DB CONNECTED`)
}) () ;//iife is used for removing the pollution by the global scope

( (name)  => {
    console.log(`DB CONNECTED two ${name}`)
}) ('vedik')