// to tract user and computer winnings count 

let userscore = 0;
let compscore = 0;

// select the user Rock, Paper and Scissor choices  

let choices = document.querySelectorAll(".choice");

// select the user and comp count paragraphs

let usercount = document.querySelector("#user-count");
let compcount = document.querySelector("#comp-count");

// select the result heading

let winheading = document.querySelector("#result")

// function to find what user select from choice

choices.forEach((choice) => {

    choice.addEventListener("click", ()=>{

        const userchoice = choice.getAttribute("id");

        console.log(`you choose ${userchoice}`)

        playGame(userchoice);

    });

});

// function to get computer choice which is random any one from option given

const computerchoice = () => {

    const option = ["Rock", "Paper", "Scissor"];

    const random = Math.floor(Math.random() * 3);

    return option[random];

}

// function if user choice and computer choice are equal

const drawGame = () => {

    console.log("Its an draw. Try Again..");

    winheading.innerHTML = "Its an draw. Play Again...";

    winheading.style.backgroundColor = "#081b31";

    winheading.style.color = "#ffffff";

}

// function for game logic

const playGame = (userchoice) => {

    let compchoice = computerchoice();

    console.log(`computer choose ${compchoice}`)

    if(userchoice === compchoice){

        drawGame();

    }
    else{

        let userwin = true;

        if(userchoice === "Rock"){

            userwin = compchoice === "Paper" ? false : true;

        }
        else if(userchoice === "Paper"){

            userwin = compchoice === "Scissor" ? false : true;

        }
        else{

            userwin = compchoice === "Rock" ? false : true;

        }

        showWinner(userchoice, compchoice, userwin);

    }
};

// function to show results on score board and also winning msg

const showWinner = (userchoice, compchoice, userwin) => {

    if(userwin){

        userscore++;

        usercount.innerHTML = userscore;

        winheading.innerHTML = "Congratulation! You Won...";

        winheading.style.backgroundColor = "green";

        winheading.style.color = "white";

    }
    else{

        compscore++;

        compcount.innerHTML = compscore;

        winheading.innerHTML = "Ah! You Loose...";

        winheading.style.backgroundColor = "red";

        winheading.style.color = "white";

    }

}


