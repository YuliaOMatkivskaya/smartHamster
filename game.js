'use strict';

const canvas = document.querySelector("#game");
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

//создаем класс еда
class food {
    constructor(img, x, y, i) {
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = img;

        this.letter = lettersRandom[i];
    }
}
//создание массива объектов, содержащих сведения, необходимые для отрисовки еды
let arrNuts = [];

for (let i=0;i<26;i++){
    let nut = new food ("nut.png",200+i*40, 320, i);
    arrNuts.push(nut);
}

let hamsterIsWinner  = new Image();
hamsterIsWinner.src = "isWinner.png";
hamsterIsWinner.X = 500;
hamsterIsWinner.Y = 150;

function victory(){
    ctx.drawImage(hamsterIsWinner,hamsterIsWinner.X,hamsterIsWinner.Y);
    ctx.font ="50px Arial";
    ctx.fillStyle = "#660000";
    ctx.fillText("Блестящий результат!", 400, 100);
    cancelAnimationFrame(GAME);
}

//отрисовываем еду
function drawFood (){
    arrNuts.forEach(function drawLetters(j){
    ctx.drawImage (j.img,j.x,j.y);
    ctx.font ="20px Arial black";
    ctx.fillText(j.letter, j.x+15, j.y+30);
  });
}


let keyButton;
let pressedButton;
let keyUpButton;
let score;

//обработчик нажатия на кнопки клавиатуры

function pressButton() {

    document.addEventListener('keydown', function(event) {
    return keyButton = event.code;
    });

switch (keyButton) {
    
    case 'KeyQ':  
        return pressedButton = 'q';
        break;
  
    case 'KeyW': 
        return pressedButton = 'w';
        break;
    
    case 'KeyE':  
        return pressedButton = 'e';
        break;
  
    case 'KeyR': 
        return pressedButton = 'r';
        break;
    
    case 'KeyT':  
        return pressedButton = 't';
        break;
  
    case 'KeyY': 
        return pressedButton = 'y';
        break;
    
    case 'KeyU':  
        return pressedButton = 'u';
        break;
  
    case 'KeyI': 
        return pressedButton = 'i';
        break;
    
    case 'KeyO':  
        return pressedButton = 'o';
        break;
  
    case 'KeyP': 
        return pressedButton = 'p';
        break;
    
    case 'KeyA':  
        return pressedButton = 'a';
        break;
  
    case 'KeyS': 
        return pressedButton = 's';
        break;
    
    case 'KeyD':  
        return pressedButton = 'd';
        break;
  
    case 'KeyF': 
        return pressedButton = 'f';
        break;
    
    case 'KeyG':  
        return pressedButton = 'g';
        break;
  
    case 'KeyH': 
        return pressedButton = 'h';
        break;
    
    case 'KeyJ':  
        return pressedButton = 'j';
        break;
  
    case 'KeyK': 
        return pressedButton = 'k';
        break;
    
    case 'KeyL':  
        return pressedButton = 'l';
        break;
  
    case 'KeyZ': 
        return pressedButton = 'z';
        break;
    
    case 'KeyX':  
        return pressedButton = 'x';
        break;
  
    case 'KeyC': 
        return pressedButton = 'c';
        break;
    
    case 'KeyV':  
        return pressedButton = 'v';
        break;
  
    case 'KeyB': 
        return pressedButton = 'b';
        break;
    
    case 'KeyN':  
        return pressedButton = 'n';
        break;
  
    case 'KeyM': 
        return pressedButton = 'm';
        break;
  
    default:
        break;
  }
    
}


function drawHamster() {
    if (hamster.X==1200){
        victory();
    }
    ctx.drawImage(hamster,hamster.X,hamster.Y);
    pressButton();
    if(arrNuts[0].letter===pressedButton){
        hamster.X=arrNuts[0].x;
        arrNuts.shift();
        score+=1;
    }
}


function gameOver(){
        ctx.font ="50px Arial";
        ctx.fillStyle = "#660000";
        ctx.fillText("GAME OVER", 500, 200);
        cancelAnimationFrame(GAME);
}


function drawHuntingCat() {
    ctx.drawImage(huntingCat,huntingCat.X,huntingCat.Y);
    huntingCat.X+=0.1;
    if (huntingCat.X+100 >= hamster.X){
        gameOver();
    }
}


function game(){
    
    drawBackGround();
    drawFood();
    drawHamster();
    drawHuntingCat();
    //drawTextBonuses();
    //victory();
    let GAME = requestAnimationFrame(game);
}

game();