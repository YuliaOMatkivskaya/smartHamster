'use strict';

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let ground = new Image();
ground.src = "ground.png";
ground.X = 0;
ground.Y = 0;

const letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

let lettersRandom = letters.sort (()=>Math.random()-0.5);


let hamster = new Image();
hamster.src = "smartHamster.png";
hamster.X = 120;
hamster.Y = 350;


//рисуем фон
function drawBackGround() {
    ctx.drawImage(ground,ground.X,ground.Y);
}

//рисуем блоки с буквами
function drawLetters() {
    for (let i=0;i<26;i++){
    //ctx.fillRect(160+i*40, 360, 40, 40);
    //ctx.fillStyle = "white";
    ctx.font ="20px Arial black";
    ctx.fillText(lettersRandom[i], 180+i*40, 380);
    }
}

function drawHamster() {
    ctx.drawImage(hamster,hamster.X,hamster.Y);
}

function game(){
    
    drawBackGround();
    drawLetters();
    drawHamster();
    //drawCat();
    //drawTextBonuses();

    GAME = requestAnimationFrame(game);
    //gameOver();
    //victory();
}

game();