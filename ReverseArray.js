let arr = [1, 2, 3, 4, 5]
//initial input array
let reversed = [];
//the variable for the reversed array
for (let i = arr.length - 1; i >= 0; i--) {
    //starts  aloop that checks from last to first index
    reversed.push(arr[i]);
    //pushes the number it is on to the 'reversed' variable
 } 

console.log (reversed)
//prints the answer