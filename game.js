function getComputerChoice(){
    const choice = ['rock','paper','scissors'];
    const random = Math.floor(Math.random() * 3)
    return choice[random];

}

function getHumanChoice(){
    const choice = prompt('Input Paper,Rock,Scissors: ').toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice,computerChoice){
    if (humanChoice == 'paper' && computerChoice == 'rock' || (humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper')){
        console.log('You Win! ' + humanChoice + " " + "beats" + " " + computerChoice);
        humanScore += 1;
    }
    else if (humanChoice === computerChoice){
        console.log('Draw');
    }
    else{
        console.log('You Lose! ' +  computerChoice + " " + "beats" + " " + humanChoice);
        computerScore += 1;
    }
}

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
for(let i=0;i<5;i++){
    playGame();
}

if(humanScore > computerScore){
    console.log('You Win! Your score: ' + humanScore + " " + "Computer score " + computerScore);
}
else{
    console.log('You Lose! Your score: ' + humanScore + " " + "Computer score " + computerScore);
}