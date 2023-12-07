// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.


const playBtn=document.getElementById("play-button")

playBtn.onclick=play 

function play(){
    location.href='./game.html'
}

const tryagainBtn=document.getElementById("play-again-button")

tryagainBtn.onclick = () =>{
    play()
}
// function play(){
//     location.href='./index.html'
// }
