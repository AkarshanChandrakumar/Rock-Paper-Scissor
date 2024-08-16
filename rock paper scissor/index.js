const buttons=document.querySelectorAll("button");
const results=document.getElementById("results");
const yourScore1=document.getElementById("yourScore");
const ComputerScore1=document.getElementById("ComputerScore");
let yourScore=0;
let CompuetrScore=0;
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const result= playround(button.id,computerPlay());
        results.textContent=result;
    });
});
function computerPlay(){
    const choices=["rock","paper","scissor"];
    const randomChoices=Math.floor(Math.random()*choices.length);
    return choices[randomChoices];
}
function playround(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return "It is a Tie!"
    }
    else if(playerSelection==="scissor"&&computerSelection==="paper"||playerSelection==="rock"&&computerSelection==="scissor"||playerSelection==="paper"&&computerSelection==="rock"){
        yourScore++;
        yourScore1.textContent=yourScore;
        return "You Win!" +" "+ playerSelection+" "+"beats"+" "+computerSelection
    }
    else{
        CompuetrScore++;
        ComputerScore1.textContent=CompuetrScore;
        return "You Lose!" +" "+ computerSelection+" "+"beats"+" "+ playerSelection
    }
}