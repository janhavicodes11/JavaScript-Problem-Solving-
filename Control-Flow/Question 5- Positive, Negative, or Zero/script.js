//Take a number and print:"Positive" "Negative" "Zero"

let a=12;
let b= -289
let c=0;

function pnz(a, b, c){
    if(a > 0 ){ // yaha i forgot ki a<0 ka logic use karna hai to check 
        console.log("Its positive")
    }

    else if( b < 0 ){
        console.log("its negative")
    }

    else{
        console.log("zero")
    }
}
console.log(pnz(a))