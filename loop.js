/**Below is a for loop that print from 0 till 9 */
for(let i = 0; i<10; i++){
    console.log(i);
}

/**Below is same as above but initiliazation of variable was done Globally */
let i = 0;
for(; i < 10;){
    console.log(i);
    i++;
}
/**Below is a while loop that print from 10 till 1 */
let j = 10;
while(j>0){
    console.log(j);
    j-- //decrement once it is iterated
}

/**Below is a DO while loop that print from 5 till 1 */
let k = 5;
do{
    console.log(k);
    k--
}while(k>0);