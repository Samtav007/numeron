// Iteration 5: Store the player score and display it on the game over screen

function play(){
    location.href='./index.html'
}

const tryagainBtn=document.getElementById("play-again-button")

tryagainBtn.onclick = () =>{
    play()
}

let realScore = document.getElementById("score-box")
let score = localStorage.getItem('player_score')

document.getElementById('score-board').innerHTML = score