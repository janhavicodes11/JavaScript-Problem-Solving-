
let isAdmin = false;
let isLoggedIn = true;

function Sign(isAdmin , isLoggedIn){
    if(isAdmin && isLoggedIn){
        console.log("Welcome to the admin Dashboard")
    }

    else if( !isAdmin  && isLoggedIn){
        console.log("Kindly log in the enter the main dashboard")
    }

    else
        console.log("Kindle log in as either admin or user")
}
console.log(Sign(isAdmin , isLoggedIn))







// Using early return pattern 

let isAdmin = false;
let isLoggedIn = true

function Sign(isAdmin , isLoggedin){
    if( isAdmin && isLoggedin)
        console.log("Welcome to the main dashboard")
    if(!isAdmin && isLoggedin)
        console.log("Kindly log in as admin")
    if(!isAdmin && !isLoggedin)
        console.log("Sign in please")

}
console.log(Sign(isAdmin , isLoggedIn))
