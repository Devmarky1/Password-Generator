// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];


// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
 
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  while (true) {
    passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
    
    if (passwordLength >= 8 && passwordLength <= 128 && Number.isInteger(passwordLength)) {
      break;
    } else {
      alert("Please enter a valid number between 8 and 128.");
    }
  }

  lowerCasedCharacters = confirm("Click ok to confirm including lowercase characters?") ? lowerCasedCharacters : [];
  upperCasedCharacters = confirm("Click ok to confirm Including uppercase characters?") ? upperCasedCharacters : [];
  numericCharacters = confirm("Click ok to confirm Including numeric characters?") ? numericCharacters : [];
  specialCharacters = confirm("Click ok to  confirm Including special characters?") ? specialCharacters : [];

  };

// Function for getting a random element from an array
function getRandom(arr) {

  return arr.sort(() => Math.random() - 0.5);
}



// Function to generate password with user input
function generatePassword(){
  getPasswordOptions();
  if (
    lowerCasedCharacters.length === 0 &&
    upperCasedCharacters.length === 0 &&
    numericCharacters.length === 0 &&
    specialCharacters.length === 0 
  ){
    alert("You have to choose at least one type of characters. Please try again");
    return;
  }

  let allArrays = [];

  if (lowerCasedCharacters.length > 0) {
    allArrays = allArrays.concat(getRandom(lowerCasedCharacters));
  }

  if (upperCasedCharacters.length > 0) {
    allArrays = allArrays.concat(getRandom(upperCasedCharacters));
  }
  
  if(numericCharacters.length > 0) {
    allArrays = allArrays.concat(getRandom(numericCharacters));
  }

  if(specialCharacters.length > 0) {
    allArrays = allArrays.concat(getRandom(specialCharacters));
  }

  let randomArray = getRandom(allArrays);
  let randomPassword = randomArray.slice(0, passwordLength);

  return randomPassword.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
