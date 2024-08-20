#! /usr/bin/env node
import inquirer from "inquirer";

let todos:string[] = [];
let condition = true;
while (condition){
    let todoQuestions = await inquirer.prompt(
        [
            {
                name: "firstQuestion",
                type: "input",
                message: "What would you like to add in your todos",
                validate: (input: string) => {
                    if (input.trim() === "") {
                        return "Todo cannot be empty. Please enter something.";
                    }
                    return true;
                },
    
            },
            {
                name : "secondQuestion",
                type: "confirm",
                message: "Would you like to add more in your todos",
                default: "true",

            }
        ]
    );
    
    todos.push(todoQuestions.firstQuestion);
    console.log("Your current todos:");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
    condition = todoQuestions.secondQuestion;
};