// Iteration 2: Generate 2 random number and display it on the screen
num1Box = document.getElementById("number1");
num2Box = document.getElementById("number2");
num1 = Math.floor(Math.random() * 100);
console.log(num1);
num2 = Math.floor(Math.random() * 100);
console.log(num2);

num1Box.innerText = num1;
num2Box.innerText = num2;

let score = 0;
const greater = document.getElementById("greater-than");
const equal = document.getElementById("equal-to");
const lesser = document.getElementById("lesser-than");

greater.onclick = function () {
    console.log(num1,num2)
    if (num1 > num2) {
        score++;
        resetTime(timerId)
    } else {
        location.href = "./gameover.html";
    }

    num1 = Math.floor(Math.random() * 100);
    console.log(num1);
    num2 = Math.floor(Math.random() * 100);
    console.log(num2);

    num1Box.innerText = num1;
    num2Box.innerText = num2;
    console.log(score)
};

equal.onclick = function () {
    if (num1 == num2) {
        score++;
        resetTime(timerId)
    } else {
        location.href = "./gameover.html";
    }

    num1 = Math.floor(Math.random() * 100);
    console.log(num1);
    num2 = Math.floor(Math.random() * 100);
    console.log(num2);

    num1Box.innerText = num1;
    console.log(score)
    num2Box.innerText = num2;
};

lesser.onclick = function () {
    if (num1 < num2) {
        score++;
        resetTime(timerId)
    } else {
        location.href = "./gameover.html";
    }

    num1 = Math.floor(Math.random() * 100);
    console.log(num1);
    num2 = Math.floor(Math.random() * 100);
    console.log(num2);

    num1Box.innerText = num1;
    num2Box.innerText = num2;
    console.log(score)
};

// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game
var time = 5;
var timer = document.getElementById("timer");
var timerId;
console.log(timer)
function showTimer() {
    time = 5
    timer.innerHTML = time
    console.log(timer)
    timerId = setInterval(() => {
        time--
        console.log("SCOre",score)
        localStorage.setItem("player_score",score)
        if (time == 0){
            location.href='./gameover.html'
            
        }
        timer.innerHTML = time 
        
    }, 1000);
}
function resetTime(timerId){
      clearInterval(timerId)
      showTimer()

}
showTimer()




