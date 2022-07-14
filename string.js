const myFirstName = "jude"; //we are storiing the sting "jude" as myFirstName
const myLastName = "samuel";

const muFullName1 = myFirstName + myLastName; // here, we are concatinating myFirstname and Lastname
const muFullName2 = `${myFirstName} ${myLastName}`; //we are concatinating, same as above;
console.log(muFullName2);  //we are printing the concatenated names to the comsole

const randomString = "Hello, how are you!! My name is kakashi sensei";

randomString.length //we are getting the entire length of the string
randomString.replace("kakashi", "naruto"); //here we are replacing kakashi with naruto;
randomString.substring(6); //here we are cutting of the first 6 element and returning the remaining;
console.log(randomString.substring(6)); //this will give "how are you!! My name is kakashi sensei" removing the "Hello,"