/**Below, we are writing a function the usual way before ES6 */
function sayHello() {
    console.log("Hello all !!")
}

/**Below we are writing same function using ES6 Syntax */
const sayHelloo = () =>{
    console.log("Hello all using ES6 Syntax")
}

/**Below, we are writing a function that has two parameters */
function printMyNameAndAge(myname, age){
    console.log(`My name is ${myname} and I am ${age} years old`);
}

//**Below, we are calling all the functions we wrote above */
sayHello();
sayHelloo();
printMyNameAndAge("mary", 43); //here, we are passing two arguments of name and age into the function