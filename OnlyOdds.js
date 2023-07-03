let inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Original Input
let answer = []; 
//Odd values will go here
for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] % 2 !== 0) {
    // odd number
    answer.push(inputArr[i]);
  }
}

if (answer.length === 1) {
  // handle the case of a single odd number
  answer = [answer[0]];
}

console.log('Answer:', answer);
