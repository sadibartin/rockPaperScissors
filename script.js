const options = ['rock','paper','scissors'];


function getComputerChoice(){

    const computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice
}
getComputerChoice()
 
function checkWinner(computerChoice,playerSelection){

    if(computerChoice == playerSelection){
        return "tie"
    }

    else if(
       computerChoice == 'rock' && playerSelection == 'paper' ||
       computerChoice == 'scissors' && playerSelection == 'rock' || 
       computerChoice == 'paper' && playerSelection == 'scissors' )
     
    {
        return "player"
    }

    else {
        return "computer"
    }
}


function playRound(computerChoice,playerSelection){
    const result = checkWinner(computerChoice,playerSelection)
    if(result == "tie"){
        return "it's a tie game"
    }
    else if(result == "player"){
    return `Player wins ${playerSelection} beats ${computerChoice}`}
    else {
        return `computer wins  ${computerChoice} beats  ${playerSelection}`

    }
}


const btn = document.getElementsByClassName("btn");
	btn.addEventListener('click', function(){ 
	playerSelection = "scissors";
	});

const computerChoice  = getComputerChoice();
console.log(playRound(computerChoice,playerSelection));





//const playerSelection = "rock";

















