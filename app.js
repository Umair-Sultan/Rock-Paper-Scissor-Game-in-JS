// to tract user and computer winnings count 

let userscore = 0;
let compscore = 0;
let totaltries = 10;

// select the user Rock, Paper and Scissor choices  

let choices = document.querySelectorAll(".choice");

// select the user and comp count paragraphs

let usercount = document.querySelector("#user-count");
let compcount = document.querySelector("#comp-count");

// select the result heading

let winheading = document.querySelector("#result")

// select the tries left paragraph

let triesleft = document.querySelector("#tries-left");

// select reset button 

let resetbutton = document.querySelector("#reset-game-btn");

// function to find what user select from choice

choices.forEach((choice) => {

    triesleft.innerHTML = totaltries;

    choice.addEventListener("click", ()=>{

        if(totaltries == 0) return; 

        const userchoice = choice.getAttribute("id");

        console.log(`you choose ${userchoice}`);

        playGame(userchoice);

        checktriesleft();   

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

        totaltries--;

        triesleft.innerHTML = totaltries;

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

        totaltries--;

        triesleft.innerHTML = totaltries;

    }
    else{

        compscore++;

        compcount.innerHTML = compscore;

        winheading.innerHTML = "Ah! You Loose...";

        winheading.style.backgroundColor = "red";

        winheading.style.color = "white";

        totaltries--;

        triesleft.innerHTML = totaltries;

    }

}

// function to reset game

resetbutton.addEventListener("click", () => {

    console.log("reset button was clicked");

    userscore = 0;

    usercount.innerHTML = userscore;

    compscore = 0;

    compcount.innerHTML = compscore;

    winheading.innerHTML = "Click on Choice to Start Game";

    winheading.style.backgroundColor = "white";

    winheading.style.color = "black";

    totaltries = 10;

    triesleft.innerHTML = totaltries;

});

function checktriesleft() {

    if(totaltries == 0) {

        console.log("tries end");

        if(userscore > compscore){

            winheading.innerHTML = "Game Over! You Won";

            winheading.style.backgroundColor = "green";

            winheading.style.color = "white";

        }else if(userscore < compscore){

            winheading.innerHTML = "Game Over! You Loose";

            winheading.style.backgroundColor = "red";

            winheading.style.color = "white";

        }else{
            
            winheading.innerHTML = "Game Over! Its Draw";

            winheading.style.backgroundColor = "#081b31";

            winheading.style.color = "#ffffff";

        }

    } 

}
