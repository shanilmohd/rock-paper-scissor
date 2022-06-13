var btnr = document.querySelector("#rock");
var btns = document.querySelector("#scissor");
var btnp = document.querySelector("#paper");
var scomp = document.querySelector("#scomp");
var syou = document.querySelector("#syou");
var res = document.querySelector("#res");
let scom = 0;
let syo = 0;
btnr.addEventListener("click",rock);
btns.addEventListener("click",scissors);
btnp.addEventListener("click",paper);
function computerPlay()
{
    items = ["Rock","Paper","Scissors"];
    return items[Math.floor(Math.random()*items.length)];
}
function playRound(playerSelection,computerSelection)
{
    res.innerHTML="";
    scomp.innerHTML="";
    syou.innerHTML="";
    let text;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper')
    {
        text=`you won ! ${playerSelection} beats ${computerSelection}`;
        syo++;
    }
    else if(playerSelection == computerSelection)
    {
        text = "Tied!";
    }
    else
    {
        text = `you lose ! ${computerSelection} beats ${playerSelection}`;
        scom++;

    }
    let textr= document.createTextNode(text);
    let textc = document.createTextNode(scom);
    let textp = document.createTextNode(syo);
    res.appendChild(textr);
    scomp.appendChild(textc);
    syou.appendChild(textp);            
}
function rock()
{
    let computerSelection = computerPlay();
    let playerSelection = "rock";
    playRound(playerSelection,computerSelection);
}
function scissors()
{
    let computerSelection = computerPlay();
    let playerSelection = "scissors";
    playRound(playerSelection,computerSelection);
}
function paper()
{
    let computerSelection = computerPlay();
    let playerSelection = "paper";
    playRound(playerSelection,computerSelection);
}