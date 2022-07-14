
/**If else statement */
if(4>0){
    console.log("Yes,  4 is greater than 0")
}else{
    console.log("No, 4 is not greater than 0")
}

/**Switch statement. It run synchronously i.e from top to buttom whenever the condition is met, it breaks and stops to run */
const myName = "elon";
switch(myName){
    case 'daniel':
        console.log("Yes you are daniel");
        break;
    case 'josh':
        console.log("Yes you are josh")
        break;
    case 'elon':
        console.log("Yes you are elon")
        break;
    default: //the default will run when no condition is met.
        console.log("We don't know you name"); 
}

