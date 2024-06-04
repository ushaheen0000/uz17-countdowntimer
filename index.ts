#! /usr/bin/env node
import inquirer from "inquirer";
async function startCountdown() {
    console.log("Welcome to the Countdown Timer")
    const { duration} = await inquirer.prompt({
        name: "duration", 
        type: "number",
        message: "Enter the duration of the countdow in seconds:"
    })
    console.log(`Countdown started for ${duration} seconds...`)
    await countdown(duration);
}
async function countdown(seconds: number) {
     const endTime = Date.now() + seconds * 1000;
     while(Date.now() < endTime) {
        const remainingSeconds = Math.ceil((endTime - Date.now()) / 1000)
        console.log(`Time remaining: ${remainingSeconds} seconds`)
        await delay(1000)
     }
     console.log("Countdown Complete!!!")
}
async function delay(ms : number) {
       return new Promise(resolve => setTimeout (resolve, ms))
}
startCountdown()