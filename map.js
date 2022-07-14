/**Map are used to store values in a key value format */

const myMap = new Map(); //create an instane of an empty map
myMap.set("1", "benz"); //we are adding banze
myMap.set("2", "toyota");
myMap.set("3", "tesla");
myMap.delete("2"); //we are deleting item with key of 2 i.e toyota
console.log(myMap); //we are printing the entire map object
myMap.values() ; //to get the values