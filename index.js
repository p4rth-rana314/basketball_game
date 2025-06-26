let score01 = document.getElementById("homescore")
let score1=0
let score02 = document.getElementById("guestscore")
let score2=0

function add1a(){
    score1+= 1
    score01.textContent = score1
}
function add2a(){
   score1+= 2
    score01.textContent = score1
}
function add3a(){
   score1+= 3
    score01.textContent = score1
}
function add1b(){
   score2+= 1
    score02.textContent = score2
}
function add2b(){
   score2+= 2
    score02.textContent = score2
}
function add3b(){
   score2+= 3
    score02.textContent = score2
}
function newgame(){
    score01.textContent =0
    score1=0
    score02.textContent=0
    score2=0
}


