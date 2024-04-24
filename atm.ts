#!/usr/bin/env node
import inquirer from "inquirer";
//store the pin & Balance of User
let myBalance: number = 10000; //Dollars
const myPin: number = 1111;

// tell the user to enter your pin code & show the user balance

let answer = await inquirer.prompt([
  {
    message: "Please input your pin code",
    name: "code",
    type: "number",
  },
]);
if (answer.code === myPin) {
  console.log("Welcome to the Daniyal's ATM Machine");
console.log(myBalance);

// Basic  Option for the user .
  let operation = await inquirer.prompt([
    {
      message: "choose one option",
      type: "list",
      name: "option",
      choices: ["Check Balance", "Withdraw cash", "Deposite cash", "Fast Cash"],
    },
  ]);

  // condition Statment for "Check Balance".
  if (operation.option === "Check Balance") {
    console.log(myBalance);
  };

// condition Statement for "Wtihdraw Cash".
  if (operation.option === "Withdraw cash") {
    const ammountAns:any =  await inquirer.prompt(
{
    name: "ammount",
    message: "Please enter the ammount you want to withdraw",
    type:"number",
    
});
if (ammountAns.ammount>=myBalance) {console.log("Insaficient Balance?");
}
else {myBalance -= ammountAns.ammount; 
  console.log("Your remaining balance is: " + myBalance);
  console.log("Thank you for using Daniyal's ATM Machine");} 
};

// condition Statement for "Deposite cash".
if (operation.option === "Deposite cash") {
  let depositeAns= await inquirer.prompt([{
    message:"Please enter the ammount you want to Deposite",
    name: "deposit",
    type:"number",
  }]);
  myBalance += depositeAns.deposit;
  console.log("Your Updated Balance is: " + myBalance ); 
}

// condition Statement for "Fast Cash".
if (operation.option === "Fast Cash") {
  const fastCashAns = await inquirer.prompt([{
    message:"Please select the ammount you want to withdraw",
    name:"fastcash",
    type:"list",
    choices:["1000","2000","3000","10000",]

  }]);
  const withdrawammount=parseInt(fastCashAns.fastcash)
  myBalance -= withdrawammount  
  console.log("Your remaining balance is: " + myBalance);
  console.log("Thank you for using Daniyal's ATM Machine");

}
}
else {
  console.log("Incorrect code Please try again");
}
