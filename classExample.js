/**We are creating a class called person. A class is a template or blueprint for creating Objects */
class Person{
    /**below is a constructor, it help us to create the object Person */
    constructor(myName, myAge){
        this.name = myName;
        this.age = myAge;
    }
    /**below is a method that says hello and display the name and age of the person */
    sayHello(){
        console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`)
    }
    goToCollege(){
        if(this.age > 16){
            console.log("I am eligible for college because I am " + this.age);
        }else{
            console.log("I am not eligible for college yet because I am just " + this.age)
        }
    }
}

const personObject1 = new Person('bush', 89);
const personObject2 = new Person('brenda', 6);

personObject1.sayHello(); //Here person I is saing hello
personObject1.name; //here we are accessing the name of person!
personObject1.age; //Here, we are accessing the age of the person

personObject2.goToCollege() // this 2nd person is calling the method goToCollege