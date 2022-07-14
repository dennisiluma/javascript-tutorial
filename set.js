/**NOTE set cannot contain two identical elements */

const mySet = new Set(); // we just created an ampty set
mySet.add('mellon'); //we are adding mellon to a set
mySet.clear(); // we are deleting everything inside the set;
mySet.add('quava');
mySet.add('apple');
mySet.add('olive');
mySet.delete('quave'); // we are deleting only quava

console.log(mySet.values()) // we are printing all the values out