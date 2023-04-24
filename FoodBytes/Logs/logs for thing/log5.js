

//Css Changer
var user2= document.getElementById('user');
var pass2 = document.getElementById("pass");
var phrase2 = document.getElementById("passphrase");
const stylesheets = ["log5.css" , "log5p2.css"];
let currentStylesheet = 0;
const change = document.getElementById("change");

function login(){
    let user = user2.value;
    let pass = pass2.value;
    let passphrase = phrase2.value;
    pass = pass.toLowerCase();
    if (user === "TechGrill" && pass === "goo goo gah gah goo-goo-goo" && passphrase === "from now, wore, jeans learned"){
        currentStylesheet = (currentStylesheet + 1) % stylesheets.length;
        change.setAttribute("href", stylesheets[currentStylesheet]);
    }
    else{
        alert("Password or Username is incorrect!")

    }
    console.log("user = " + user);
    console.log("pass = " + pass);
    console.log("phrase = " + passphrase);
}

//Open password
