let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let user = document.querySelector("#userscore");
let comp = document.querySelector("#compscore");
let msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["rock", "paper","scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options [randIdx];
}


const playGame = (userChoice) =>{
    //generate comp choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        //Draw
        msg.textContent = "Game was draw, Play again";
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        if(userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner();
    }
}

const showWinner = (userWin) =>{

    if(userWin){
        msg.textContent = "You Win!";
        userScore++;
        user.innerText = userScore;
    }else{
        msg.textContent = "Computer Win!";
        compScore++;
        comp.textContent = compScore;
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});