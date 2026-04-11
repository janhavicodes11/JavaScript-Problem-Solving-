function rps(human , computer){
if(human === "rock" && computer === "scissors"){
        console.log("human is winner")
    }

    else if (human === "paper" && computer === "scissors"){
        console.log("computer is winner")

    }

    else if( human=== "rock" && computer==="scissors"){
        console.log("human is the winner")
    }

   else{
        console.log("draw")
    }
}
console.log(rps("paper" , "scissors"))


// using early return value :
function rps( human , computer){
    if(human ==="rock " && computer === "scissor") return "human is winner"
    if(human === "paper" && computer === "scissors") return "computer is winner"
    if(human=== "rock" && computer==="scissors") return "human is winner"
    //if(human=== "rock" && computer==="rock") return "draw"
    if(human === computer) return "draw"
}
console.log(rps("paper" , "paper"))