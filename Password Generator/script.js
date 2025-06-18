const passwordBox = document.getElementById("password")
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
const lowerCase = "abcdefghijklmnopqrstuvxwyz";
const number ="0123456789";
const symbols = "@#$%^&()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbols;

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * symbols.length)];
    }
    passwordBox.value = password;
}