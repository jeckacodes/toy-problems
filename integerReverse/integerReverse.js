/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // find the last digit by doing num % things
  // once the last digit is found, keep track of it
  // subtract it from num and divide num by 10
  // do this again
  digits = '';
  while (number > 0) {
    digits += number % 10;
    number = number - (number % 10);
    number = number/10;
    console.log(digits);
  }
  return parseInt(digits);
}

console.log(reverseInteger(5)===5); //should be 5
console.log(reverseInteger(51)===15);
console.log(reverseInteger(1234)===4321);