#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
console.log("Your Current Balance is:", myBalance);

let myPin = 1234;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter Your Pin",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Please select option",
      choices: ["Withdraw", "Check Balance", "Fast Cash"],
    },
  ]);

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
      },
    ]);

    if (amountAns.amount > myBalance) {
      console.log("Insufficient Balance");
    } else {
      myBalance -= amountAns.amount;
      console.log(" your remaining balance is: " + myBalance);
    }
  } else if (operationAns.operation === "Fast Cash") {
    let cash = await inquirer.prompt([
      {
        name: "Action",
        message: "Select the amount which you withdrawal",
        type: "list",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);
    myBalance -= cash.Action;
    console.log(
      `You have successfully withdrawal !! ${cash.Action} \n Your reaminig balance is ${myBalance}`
    );
  } else if (operationAns.operation === "Check Balance") {
    console.log(`Your Totel Balance is:${myBalance}`);
  }
} else {
  console.log("Incorrect pin number");
}
