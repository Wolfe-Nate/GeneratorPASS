// Assignment Code
var alphaLow = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaUp = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var unique = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "+",
  "=",
  "-",
  "_",
  ",",
  "/",
  ";",
  ":",
  "<",
  ">",
  "/",
  "?",
];
var passArray = "";
var password = "";
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var size = prompt("Choose between 8-128 characters for your password length");
  console.log(size);
  while (size < 8 || size > 128) {
    size = prompt("Please Re-enter a valid number 8-128");
  }
  //chosen length to be used later
  uppercase = prompt("Y/N for Uppercase letters");
  lowercase = prompt("Y/N for lowercase letters in password");
  numbers = prompt("Y/N for numbers in password");
  special = prompt("Y/N for special characters in password");
  if ((uppercase == "y", "Y")) {
    passArray = passArray.concat(alphaUp);
  }
  console.log(passArray);
  if (((lowercase = "y"), "Y")) {
    passArray = passArray.concat(alphaLow);
  }
  console.log(passArray);
  if (((numbers = "y"), "Y")) {
    passArray = passArray.concat(number);
  }
  console.log(passArray);
  if (((special = "y"), "Y")) {
    passArray = passArray.concat(unique);
  }
  console.log(passArray);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// console.log(size);
// console.log(uppercase);
// console.log(lowercase);
// console.log(numbers);
// console.log(special);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generatePassword);
//Math.floor(Math.random() *
