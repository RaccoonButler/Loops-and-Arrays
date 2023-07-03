let word = "hello"
//Input value
let consonants = 0;
let vowels = 0;
//Declares value for the consonants and vowels

for (let i = 0; i < word.length; i++) { 
    //loop checks over the characters of the inputted string 1 time
      const char = word[i];
    //this gives the characters of the word the variable of 'char'
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowels++;
    //This says to add to the 'vowel' variable if the character 
    //of the string is equal to one of these characters
    } else if (char >= "a" && char <= "z") {
    consonants++;
    //otherwise, it adds to the consonant value
    }
}
  
console.log(word, "has", consonants, "consonants and", vowels, "vowels");
//prints the answer
  