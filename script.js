//  1. Upon clicking Generate Password button we are prompted to 
//       a. password length 8-128 characters
//       b numbers
//       c uppercase
//       d lowercase
//  2. create the random password
//  3. write password to password input

//What happens when button is pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// possible arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declarations 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?", 10));

// password between 8 and 128 characters 
while(confirmLength <= 7 || confirmLength >= 129) {
  alert("Password length must be between 8-128 characters.  Please enter a proper length");
  var confirmLength = (prompt("How many characters would you like your password to contain, between 8 and 128?"));
    } 

// Repeat back how many charactes the user will have  
  alert(`Your password will have ${confirmLength} characters`);

// Password Parameters 
  var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
  var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
  var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");

// Loop if answer is outside the parameters 
while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
  alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");   
    }

//creating the password
var passwordCharacters = []
      
if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialChar)
}

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number)
}
  
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper)
}

console.log(passwordCharacters)

// String for the Random Password
var randomPassword = ""
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
  }
return randomPassword;
}

//write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}