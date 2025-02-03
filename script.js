
const passwordBox = document.getElementById("password")
const length = 12;
const uppercase = "ADEFRGTUONVCDGUKKGHDRFGH";
const lowercase = "abdheifbfyejdnlcmdx";
const number = "01243647789";
const symbol = "#%^&II((&^%^$$%#@";
const allChar = uppercase + lowercase + number + symbol;

function createPassword(){
   let password = "";
   password += uppercase[Math.floor(Math.random()*uppercase.length)]
   password += lowercase[Math.floor(Math.random()*lowercase.length)]
   password += number[Math.floor(Math.random()*number.length)]
   password += symbol[Math.floor(Math.random()*symbol.length)]

   while(length>password.length){
    password += allChar[Math.floor(Math.random()*allChar.length)];

   }
   passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execuCommand("copy");
}


