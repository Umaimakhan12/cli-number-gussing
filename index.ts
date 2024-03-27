#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Wellcone to Umaima khan - Cli Number Guessing Game");

const randonNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type:"number",
        message:"Enter your guess number(Numbe Limit from 1 to 5):",
    },
]);

if(answer.userGuessedNumber === randonNumber){
console.log("Congratulation i you guess a correct number.");
}
else{
    console.log("Sorry, you guess a wrong number");
}
    