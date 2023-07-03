for (let i = 1; i <= 100; i++) {
    // Start a loop that counts from 1 to 100
  
    if (i % 3 === 0 && i % 5 === 0) {
      // Checks if the current number (i) is divisible by both 3 and 5
      console.log("FizzBuzz");
      // Print "FizzBuzz" when the this is true
    } else if (i % 3 === 0) {
      // Check if the current number is divisible by 3
      console.log("Fizz");
      // Print "Fizz" when it is
    } else if (i % 5 === 0) {
      // Check if the current number is divisible by 5
      console.log("Buzz");
      // Print "Buzz" when it is
    } else {
      console.log(i);
      // Print the current number when not divisible by either
    }
  }
  