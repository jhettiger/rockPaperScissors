
let userChoice = getUserChoice();
let computerChoice = getComputerChoice();

//generate computer choice
function getComputerChoice(computerChoice) {
    let randomPick = ["rock" , "paper" , "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return (randomPick[randomNumber]);
}
getComputerChoice();
//make option for user to pick choice
function getUserChoice(userChoice) {
    prompt ("Do you choose rock, paper, or scissors?")
    return (userChoice);
}

//check to see who won 
function playRound(userChoice, computerChoice) {
if (userChoice === "ROCK" && computerChoice === "SCISSORS"){
    console.log("You win! Rock beats scissors!")
}
else if (userChoice === "ROCK" && computerChoice === "PAPER"){
    console.log("You lose! Paper beats rock!")
}
else if (userChoice === "PAPER" && computerChoice === "ROCK"){
    console.log("You win! Paper beats rock!")
}
else if (userChoice === "PAPER" && computerChoice === "SCISSORS"){
    console.log("You lose! Scissors beats paper!")
}
else if (userChoice === "SCISSORS" && computerChoice === "PAPER"){
    console.log("You win! Scissors beats paper!")
}
else if (userChoice === "SCISSORS" && computerChoice === "ROCK"){
    console.log("You lose! Rock beats scissors!")
}
else {
    console.log("It's a tie!")
}
};
playRound(userChoice,computerChoice);
//return winner