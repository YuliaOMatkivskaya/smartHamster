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
hamster.X = 160;
hamster.Y = 310;

let nut =  new Image();
nut.src = "nut.png";

let huntingCat  = new Image();
huntingCat.src = "huntingCat2.png";
huntingCat.X = 0;
huntingCat.Y = 250;

//рисуем фон
function drawBackGround() {
    ctx.drawImage(ground,ground.X,ground.Y);
}

//рисуем блоки с буквами
function drawLetters() {
    for (let i=0;i<26;i++){
    ctx.drawImage (nut,200+i*40, 320);
    //ctx.fillRect(160+i*40, 360, 40, 40);
    //ctx.fillStyle = "white";
    ctx.font ="20px Arial black";
    ctx.fillText(lettersRandom[i], 215+i*40, 350);
    }
}

function drawHamster() {
    ctx.drawImage(hamster,hamster.X,hamster.Y);
}

function gameOver(){
        ctx.font ="50px Arial";
        ctx.fillStyle = "#660000";
        ctx.fillText("GAME OVER", 500, 200);
        cancelAnimationFrame(GAME);
}

function drawHuntingCat() {
    ctx.drawImage(huntingCat,huntingCat.X,huntingCat.Y);
    huntingCat.X+=1;
    if (huntingCat.X+100 == hamster.X){
        gameOver();
    }
}


function game(){
    
    drawBackGround();
    drawLetters();
    drawHamster();
    drawHuntingCat();
    //drawTextBonuses();

    let GAME = requestAnimationFrame(game);
    //victory();
}

game();