// Assignment Code
var generateBtn = document.querySelector("#generate");
var size = prompt("Choose between 8-128 characters for your password length");
//chosen length to be used later
var uppercase = prompt("Y/N for Uppercase letters");
var lowercase = prompt("Y/N for lowercase letters in password");
var numbers = prompt("Y/N for numbers in password");
var special = prompt("Y/N for special characters in password");
// add boolean for each criteria and make on their own line for User experience.
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
console.log(size);
console.log(uppercase);
console.log(lowercase);
console.log(numbers);
console.log(special);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//abcdefghijklmnopqrstuvwxyz
//0123456789
//ABCDEFGHIJKLMNOPQRSTUVWXYZ
//Math.floor(Math.random() *
//!@#$%^&*(){}+=-_,/;:<>/?
