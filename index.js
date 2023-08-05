let randomnum = Math.floor(Math.random() * 100) +1;
let score = 10;
let highscore = 0;
console.log(randomnum);
function message (message){
document.querySelector(".message").textContent = message;
}

function check (){
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        message("no number!!");
    }   
    else if(guess === randomnum){
        message("correct number!!");
        let numbericon = document.querySelector(".number");
        numbericon.textContent= randomnum;
        document.querySelector("body").style.backgroundColor = "#60b347";
        if (score > highscore) {
        highscore = score;
        document.getElementById("highscore").textContent = highscore;

        }
        
    }
    else if(guess !== randomnum){
       if(score > 1){
       if (guess > randomnum) {
        score --;
        message("too high!!!");
        document.getElementById("score").textContent = score  
       }
       else{
        score --;
        message("too low!!!");
        document.getElementById("score").textContent = score
       }
    }
    else{
        message("game over!!!");
        document.querySelector("body").style.backgroundColor = "#951f43"

    }
  }
}
document.querySelector(".check").addEventListener("click",check)

function init(){
  score = 10;
  randomnum = Math.floor(Math.random() * 100) + 1;
  console.log(randomnum);
  message('Start guessing...');
  document.getElementById('score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
}
document.querySelector('.again').addEventListener("click" , init);