'use strict';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

let ground = new Image();
ground.src = 'img/ground.png';
ground.X = 0;
ground.Y = 0;

const lettersEng = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const lettersRus = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','ё'];


//сортируем буквы случайным образом
let lettersRandomEng = lettersEng.sort (()=>Math.random()-0.5);
let lettersRandomRus = lettersRus.sort (()=>Math.random()-0.5);

let hamster = new Image();
hamster.src = 'img/smartHamster.png';
hamster.X = 160;
hamster.Y = 310;

let nut =  new Image();
nut.src = 'img/nut.png';

let huntingCat  = new Image();
huntingCat.src = 'img/huntingCat2.png';
huntingCat.X = 0;
huntingCat.Y = 250;

let catWon = new Image();
catWon.src = 'img/cat won.png';

const crunch = new Audio();
crunch.src = 'music/crunch.mp3';

const victoryHamster = new Audio();
victoryHamster.src = 'music/victory.mp3';

const catGreedyEats = new Audio();
catGreedyEats.src = 'music/cat greedy eats.mp3';

//задаем несколько уровней сложности
let speedOfCat;

level1.onclick = () => speedOfCat = 0.1;
level2.onclick = () => speedOfCat = 0.3;
level3.onclick = () => speedOfCat = 0.5;


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

        this.letterEng = lettersRandomEng[i];
        this.letterRus = lettersRandomRus[i];
    }
}
//создание массива объектов, содержащих сведения, необходимые для отрисовки еды
let arrNuts = [];

for (let i=0;i<26;i++){
    let nut = new food ('img/nut.png',200+i*40, 320, i);
    arrNuts.push(nut);
}

let lang;
eng.onclick = () => lang = 'Eng';
rus.onclick = () => lang = 'Rus'; 

//отрисовываем еду
function drawFood (){
    arrNuts.forEach(function drawLetters(j){
    ctx.drawImage (j.img,j.x,j.y);
    ctx.font ='20px Arial black';
    if (lang=='Eng') {ctx.fillText(j.letterEng, j.x+13, j.y+30);}
    if (lang=='Rus') {ctx.fillText(j.letterRus, j.x+13, j.y+30);}
});
}

//обработчик нажатия на кнопки клавиатуры
let keyButton;
let pressedButtonEng;
let pressedButtonRus;

function pressButton() {

document.addEventListener('keydown', function(event) {
    return keyButton = event.code;
    });

    if (lang=='Eng'){
switch (keyButton) {
    
    case 'KeyQ':  
        return pressedButtonEng = 'q';
        break;
  
    case 'KeyW': 
        return pressedButtonEng = 'w';
        break;
    
    case 'KeyE':  
        return pressedButtonEng = 'e';
        break;
  
    case 'KeyR': 
        return pressedButtonEng = 'r';
        break;
    
    case 'KeyT':  
        return pressedButtonEng = 't';
        break;
  
    case 'KeyY': 
        return pressedButtonEng = 'y';
        break;
    
    case 'KeyU':  
        return pressedButtonEng = 'u';
        break;
  
    case 'KeyI': 
        return pressedButtonEng = 'i';
        break;
    
    case 'KeyO':  
        return pressedButtonEng = 'o';
        break;
  
    case 'KeyP': 
        return pressedButtonEng = 'p';
        break;
    
    case 'KeyA':  
        return pressedButtonEng = 'a';
        break;
  
    case 'KeyS': 
        return pressedButtonEng = 's';
        break;
    
    case 'KeyD':  
        return pressedButtonEng = 'd';
        break;
  
    case 'KeyF': 
        return pressedButtonEng = 'f';
        break;
    
    case 'KeyG':  
        return pressedButtonEng = 'g';
        break;
  
    case 'KeyH': 
        return pressedButtonEng = 'h';
        break;
    
    case 'KeyJ':  
        return pressedButtonEng = 'j';
        break;
  
    case 'KeyK': 
        return pressedButtonEng = 'k';
        break;
    
    case 'KeyL':  
        return pressedButtonEng = 'l';
        break;
  
    case 'KeyZ': 
        return pressedButtonEng = 'z';
        break;
    
    case 'KeyX':  
        return pressedButtonEng = 'x';
        break;
  
    case 'KeyC': 
        return pressedButtonEng = 'c';
        break;
    
    case 'KeyV':  
        return pressedButtonEng = 'v';
        break;
  
    case 'KeyB': 
        return pressedButtonEng = 'b';
        break;
    
    case 'KeyN':  
        return pressedButtonEng = 'n';
        break;
  
    case 'KeyM': 
        return pressedButtonEng = 'm';
        break;

        
    default:
        break;
}
}
if (lang=='Rus'){
    switch (keyButton) {
    
        case 'KeyQ':  
            return pressedButtonRus = 'й';
            break;
      
        case 'KeyW': 
            return pressedButtonRus = 'ц';
            break;
        
        case 'KeyE':  
            return pressedButtonRus = 'у';
            break;
      
        case 'KeyR': 
            return pressedButtonRus = 'к';
            break;
        
        case 'KeyT':  
            return pressedButtonRus = 'е';
            break;
      
        case 'KeyY': 
            return pressedButtonRus = 'н';
            break;
        
        case 'KeyU':  
            return pressedButtonRus = 'г';
            break;
      
        case 'KeyI': 
            return pressedButtonRus = 'ш';
            break;
        
        case 'KeyO':  
            return pressedButtonRus = 'щ';
            break;
      
        case 'KeyP': 
            return pressedButtonRus = 'з';
            break;
        
        case 'KeyA':  
            return pressedButtonRus = 'ф';
            break;
      
        case 'KeyS': 
            return pressedButtonRus = 'ы';
            break;
        
        case 'KeyD':  
            return pressedButtonRus = 'в';
            break;
      
        case 'KeyF': 
            return pressedButtonRus = 'а';
            break;
        
        case 'KeyG':  
            return pressedButtonRus = 'п';
            break;
      
        case 'KeyH': 
            return pressedButtonRus = 'р';
            break;
        
        case 'KeyJ':  
            return pressedButtonRus = 'о';
            break;
      
        case 'KeyK': 
            return pressedButtonRus = 'л';
            break;
        
        case 'KeyL':  
            return pressedButtonRus = 'д';
            break;
      
        case 'KeyZ': 
            return pressedButtonRus = 'я';
            break;
        
        case 'KeyX':  
            return pressedButtonRus = 'ч';
            break;
      
        case 'KeyC': 
            return pressedButtonRus = 'с';
            break;
        
        case 'KeyV':  
            return pressedButtonRus = 'м';
            break;
      
        case 'KeyB': 
            return pressedButtonRus = 'и';
            break;
        
        case 'KeyN':  
            return pressedButtonRus = 'т';
            break;
      
        case 'KeyM': 
            return pressedButtonRus = 'ь';
            break;
        
        case 'Semicolon':  
            return pressedButtonRus = 'ж';
            break;
      
        case 'Quote': 
            return pressedButtonRus = 'э';
            break;    
        case 'Backquote':
            return pressedButtonRus = 'ё';
            break;
        
        case 'BracketLeft':
            return pressedButtonRus = 'х';
            break;
    
        case 'BracketRight':
            return pressedButtonRus = 'ъ';
            break;
    
        case 'Comma':
            return pressedButtonRus = 'б';
            break;   
    
        case 'Period':
            return pressedButtonRus = 'ю';
            break; 
            
        default:
            break;
    }

}
    
}

//выводим количество съеденных орехов на экран
let score=0;
function drawScore(){
    ctx.font ='20px Arial black';
    ctx.fillText('Score: ' + score, 1050, 50);
}

//если все орехи с буквами съедены хомяком 

let hamsterIsWinner  = new Image();
hamsterIsWinner.src = 'img/isWinner.png';
hamsterIsWinner.X = 500;
hamsterIsWinner.Y = 150;

function victory(){
    ctx.drawImage(hamsterIsWinner,hamsterIsWinner.X,hamsterIsWinner.Y);
    ctx.font ='50px Arial';
    ctx.fillStyle = '#660000';
    ctx.fillText('Блестящий результат!', 400, 100);
    cancelAnimationFrame(GAME);
}

//рисуем хомяка
function drawHamster() {
    if (hamster.X==1200){
        victoryHamster.play();
        victory();
    }
    ctx.drawImage(hamster,hamster.X,hamster.Y);
    pressButton();
    if((arrNuts[0].letterEng===pressedButtonEng||arrNuts[0].letterRus===pressedButtonRus)&&(speedOfCat===0.1||speedOfCat===0.3||speedOfCat===0.5)){
        hamster.X=arrNuts[0].x;
        crunch.play();
        arrNuts.shift();
        score+=1;
    }
}

//если кот догнал хомяка
function gameOver(){
        
        ctx.font ='50px Arial';
        ctx.fillStyle = '#660000';
        ctx.fillText('GAME OVER', 460, 200);
        setTimeout(() => {
            ctx.drawImage(catWon,huntingCat.X-100,huntingCat.Y-50);
        }, 2000);
        cancelAnimationFrame(GAME);
        
}

//рисуем кота
function drawHuntingCat() {
    ctx.drawImage(huntingCat,huntingCat.X,huntingCat.Y);
    if (speedOfCat===0.1||speedOfCat===0.3||speedOfCat===0.5){
    huntingCat.X+=speedOfCat;
    if (huntingCat.X+100 >= hamster.X){
        catGreedyEats.play();
        gameOver();
    }
    }
}

//главная функция, вызывающая остальные
function game(){
    drawBackGround();
    drawFood();
    drawHamster();
    drawHuntingCat();
    drawScore();

    let GAME = requestAnimationFrame(game);
}

game();