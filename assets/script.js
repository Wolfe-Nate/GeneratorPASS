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
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passArray = [];
  var size = parseInt(
    prompt("Choose between 8-128 characters for your password length")
  );
  console.log(size);
  while (size < 8 || size > 128) {
    size = parseInt(prompt("Please Re-enter a valid number 8-128"));
  }
  //chosen length to be used later
  let uppercase = false;
  let lowercase = false;
  let numbers = false;
  let special = false;

  while (!uppercase && !lowercase && !numbers && !special) {
    uppercase = confirm("Ok for Uppercase letters");
    lowercase = confirm("Ok for Lowercase letters");
    numbers = confirm("Ok for numbers in password");
    special = confirm("OK for special characters in password");
  }
  if (uppercase) {
    passArray = passArray.concat(alphaUp);
  }

  if (lowercase) {
    passArray = passArray.concat(alphaLow);
  }

  if (numbers) {
    passArray = passArray.concat(number);
  }

  if (special) {
    passArray = passArray.concat(unique);
  }
  console.log(passArray);
  let password = "";
  for (var i = 0; i < size; i++) {
    var characterNumber = Math.floor(Math.random() * passArray.length);
    password += passArray[characterNumber]; // password = password + passArray[characterNumber]
    console.log(password);
  }
  return password;
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
// console.log(generatePassword);
//Math.floor(Math.random() *
