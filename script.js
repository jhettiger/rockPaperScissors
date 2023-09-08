let computerChoice = getComputerChoice();
let userChoice = prompt("Do you choose rock, paper, or scissors?");
let userScore = 0;
let computerScore = 0;

//generate computer choice
function getComputerChoice(computerChoice) {
    let randomPick = ["ROCK" , "PAPER" , "SCISSORS"];
    let randomNumber = Math.floor(Math.random() * 3);
    return (randomPick[randomNumber]);
}


//generate user choice
function getUserChoice(userChoice){
    prompt ("Do you choose rock, paper, or scissors?");
}
//play 1 round 
function playRound(userChoice, computerChoice) {
computerChoice = getComputerChoice();

if (userChoice === "ROCK" && computerChoice === "SCISSORS"){
    console.log("You win! Rock beats scissors!");
    userScore = userScore + 1;
}
else if (userChoice === "ROCK" && computerChoice === "PAPER"){
    console.log("You lose! Paper beats rock!");
    computerScore = computerScore +1;
}
else if (userChoice === "PAPER" && computerChoice === "ROCK"){
    console.log("You win! Paper beats rock!");
    userScore = userScore + 1;
}
else if (userChoice === "PAPER" && computerChoice === "SCISSORS"){
    console.log("You lose! Scissors beats paper!");
    computerScore = computerScore +1;
}
else if (userChoice === "SCISSORS" && computerChoice === "PAPER"){
    console.log("You win! Scissors beats paper!");
    userScore = userScore + 1;
}
else if (userChoice === "SCISSORS" && computerChoice === "ROCK"){
    console.log("You lose! Rock beats scissors!");
    computerScore = computerScore +1;
}
else {
    console.log("It's a tie!");
}
getUserChoice();
};

//determine who wins
function declareWinner(userScore, computerScore) {
    if (userScore > computerScore){
        console.log("You win! Computer sucks!");
    }
    else if (computerScore > userScore) {
        console.log("Computer wins! You suck!")
    }
    else {
        console.log("It's a tie! You both suck!");
    }
}
//create round of 5 game
function game() {
    for (i=1; i <=5; i++){
        playRound(userChoice, computerChoice);
    }
    declareWinner();
}
game();

console.log(userScore);
console.log(computerScore);