
const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("Thank you " + name + "!")

let inRoom = false
let options = ["Put hand in hole","Find the key","Open the door"]

while(!inRoom){
    const answer= readline.keyInSelect(options, "What would you like to do?: ")
    
    if (options[answer] === "Put hand in hole"){
        console.log("You are Dead");
        inRoom = true;
    } else if (options[answer] === "Find the key"){
        console.log("Congratulations, open the door and leave!");  
        inRoom=true    
    } else if(options [answer]=== "Open the door"){
        console.log("Find the key so you can open the door !");
    } else {
        console.log("You cannot Escape");
    }
}
