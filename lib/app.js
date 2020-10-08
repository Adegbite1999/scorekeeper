var p1button = document.getElementById('p1');
var p1Display = document.querySelector("#ds1");
var p2button = document.getElementById('p2');
var p2Display = document.querySelector("#ds2");
var reset = document.querySelector("#reset");
var stop = document.getElementById("stop-score");
var numInput = document.getElementById("input-btn");

 var p1score=0;
 var p2score=0;
 var gameOver=false;
 var winningScore=5;


 p1button.addEventListener("click", function(){
     if(!gameOver){
         p1score++;
         if(p1score===winningScore){
             p1Display.textContent = winningScore;
             p1Display.classList.add("toggle");
             gameOver=true;
         }
     }
     p1Display.textContent =p1score;
 });

p2button.addEventListener("click", function(){
     if(!gameOver){
         p2score++;
         if(p2score===winningScore){
             p2Display.textContent = winningScore;
             p2Display.classList.add("toggle");
             gameOver=true;
         }
     }
     p2Display.textContent =p2score;
 });

reset.addEventListener("click",function(){
p1score=0;
p2score=0;
p1Display.textContent = 0;
p2Display.textContent =0;
p1Display.classList.remove("toggle");
p2Display.classList.remove("toggle");
});

numInput.addEventListener("click",function(){
stop.textContent=numInput.value;
winningScore=Number(numInput.value);
reset();


});

function reset(){
p1score=0;
p2score=0;
p1Display.textContent = 0;
p2Display.textContent =0;
p1Display.classList.remove("toggle");
p2Display.classList.remove("toggle");
gameOver=false;
}