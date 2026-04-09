 Question 1: Write a function getGrade(score) that:
• Takes a student’s marks (0 to 100)
 • Returns the grade based on this logic:
 90–100 A+
 80–89 A
70–79 B
60–69 C
33–59 D
 0–32 Fail
 Anything else Invalid marks ❌

function getGrade(score){
    if(score >=90 && score <=100){
        console.log("A++")
    }

    else if (score >=80 && score<=89){
        //console.log("A")
    }

    else if (score >=70 && score<=79){
        //console.log("B")
    }

    else if (score >=60 && score <=69){
        //console.log("C")
   }

    else if (score>=33 && score<=59){
        //console.log("D")
    }

    else if (score >=0 && score<=32) {
        //console.log("fail")
    }

    else{
        //console.log("Invalid marks")
    }
        }console.log(getGrade(1000));

// Using early return value :
function getGrade(score){
    if (score >= 90 && score <= 100) return "A++"
    
    if (score >= 80 && score <= 89) return "A"
    
    if (score >= 70 && score <= 79) return "B"
    
    if (score >= 60 && score <= 69)   return "C"
    
    if (score >= 33 && score <= 59) return "D"
    if (score >= 0 && score <= 32) return "Fail"
   return "Invalid marks"
 }
   console.log(getGrade(89))


 
    
     
Question 2: Rock- paper scisoors logic :
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
console.log(rps("rock" , "rock"))


