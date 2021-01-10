// Assignment code here
let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
let upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%^&*()";
let numberCharacters = "0123456789"; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

// Prompted for the length of the password between 8-128 characters
let passwordLength = prompt("Please choose password length between 8-128 characters")

// prompted for character types to include in the password - choose lowercase, uppercase, numeric, and/or special characters
let lowerCase = confirm("Would you like to include lowercase letters?")

let upperCase = confirm("Would you like to include uppercase letters?")

let numbers = confirm("Would you like to include numbers?")

let symbolsChar = confirm("Would you like to include special characters?")

let password=[];
let passwordPool='';
let passwordText = document.querySelector("#password");

// If chosen, adds in either lowercase, upperclass, number, and/or special characters randomly into the generated password
for (i=0; i < passwordLength; i++) { 
  let randomNumber = Math.floor(Math.random()*4+1);

  if (lowerCase && randomNumber == 1) {
      passwordPool += lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)];
  }
  if (upperCase && randomNumber == 2) {
      passwordPool += upperCharacters[Math.floor(Math.random() * upperCharacters.length)];
  }
  if (numbers && randomNumber == 3) {
    passwordPool += numberCharacters[Math.floor(Math.random() * numberCharacters.length)]; 
  }
  if (symbolsChar && randomNumber == 4) {
      passwordPool += symbols[Math.floor(Math.random() * symbols.length)];
  }
};

// Generate password based off of user's preferences from prompted questions and chosen answers
for (i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * passwordPool.length);

    password[i] = passwordPool[random];
}

// Use .join to connect into one string 
passwordText.value = password.join('');
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

