#!/usr/bin/env node

// Import the 'inquirer' module, which is a command line interface for Node.js
console.log(`\n **** Welcome To The Word Counter App **** `)
import inquirer from "inquirer"

// Declare a constan 'answers' and assign it to the result of inquirer.prompt function

const answers:{
    sentence: string
} = await inquirer.prompt(
    [
        {
            name: "sentence",
            type:"input",
            message: "Enter Your Sentence To Count The Word:"
        }
    ]
)

const words = answers.sentence.trim().split(" ")

// Print the array of words to the console
console.log(words)

// Print the word count of the sentence to the console

console.log(`Your Sentence Word Count is ${words.length}`);