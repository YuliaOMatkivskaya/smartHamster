'use strict';

let myModal = new bootstrap.Modal(document.querySelector('#staticBackdrop'));

//задаем скорость движения кота
let speedOfCat;
let level1 = document.querySelector('#level1');
let level2 = document.querySelector('#level2');
let level3 = document.querySelector('#level3');

level1.onclick = () => speedOfCat = 0.1;
level2.onclick = () => speedOfCat = 0.3;
level3.onclick = () => speedOfCat = 0.5;


//задаем язык игры
let lang;
let eng = document.querySelector('#eng');
let rus = document.querySelector('#rus');

eng.onclick = () => lang = 'Eng';
rus.onclick = () => lang = 'Rus';

//отмечаем нажатие кнопки 'начать игру'
let start;
let startGame = document.querySelector('#startGame');

startGame.onclick = () => start = true;

//проверка, заданы ли условия игры
if (!((lang === 'Eng' || lang === 'Rus') && (speedOfCat === 0.1 || speedOfCat === 0.3 || speedOfCat === 0.5) && start)) {
    myModal.show();
}

//новая игра
let newGame = document.querySelector('#newGame');
newGame.onclick = () => window.location.reload();

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

let ground = new Image();
ground.src = 'img/ground.png';
ground.X = 0;
ground.Y = 0;

const lettersEng = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const lettersRus = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё'];


//сортируем буквы случайным образом
let lettersRandomEng = lettersEng.sort(() => Math.random() - 0.5);
let lettersRandomRus = lettersRus.sort(() => Math.random() - 0.5);

let hamster = new Image();
hamster.src = 'img/smartHamster.png';
hamster.X = 160;
hamster.Y = 310;

let nut = new Image();
nut.src = 'img/nut.png';

let huntingCat = new Image();
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

//рисуем фон
function drawBackGround() {
    ctx.drawImage(ground, ground.X, ground.Y);
}

//создаем класс еда
class Food {
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

for (let i = 0; i < 26; i++) {
    let nut = new Food('img/nut.png', 200 + i * 40, 320, i);
    arrNuts.push(nut);
}


//отрисовываем еду
function drawFood() {
    arrNuts.forEach(function drawLetters(j) {
        ctx.drawImage(j.img, j.x, j.y);
        ctx.font = '20px Arial black';
        ctx.fillStyle = '#000000';
        if (lang === 'Eng') {
            ctx.fillText(j.letterEng, j.x + 13, j.y + 30);
        }
        if (lang === 'Rus') {
            ctx.fillText(j.letterRus, j.x + 13, j.y + 30);
        }
    });
}

//обработчик нажатия на кнопки клавиатуры
let keyButton;
let pressedButtonEng;
let pressedButtonRus;

function pressButton() {

    document.addEventListener('keydown', function (event) {
        return keyButton = event.code;
    });

    switch (keyButton) {

        case 'KeyQ':
            pressedButtonRus = 'й';
            pressedButtonEng = 'q';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyW':
            pressedButtonRus = 'ц';
            pressedButtonEng = 'w';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyE':
            pressedButtonRus = 'у';
            pressedButtonEng = 'e';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyR':
            pressedButtonRus = 'к';
            pressedButtonEng = 'r';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyT':
            pressedButtonRus = 'е';
            pressedButtonEng = 't';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyY':
            pressedButtonRus = 'н';
            pressedButtonEng = 'y';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyU':
            pressedButtonRus = 'г';
            pressedButtonEng = 'u';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyI':
            pressedButtonRus = 'ш';
            pressedButtonEng = 'i';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyO':
            pressedButtonRus = 'щ';
            pressedButtonEng = 'o';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyP':
            pressedButtonRus = 'з';
            pressedButtonEng = 'p';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyA':
            pressedButtonRus = 'ф';
            pressedButtonEng = 'a';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyS':
            pressedButtonRus = 'ы';
            pressedButtonEng = 's';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyD':
            pressedButtonRus = 'в';
            pressedButtonEng = 'd';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyF':
            pressedButtonRus = 'а';
            pressedButtonEng = 'f';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyG':
            pressedButtonRus = 'п';
            pressedButtonEng = 'g';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyH':
            pressedButtonRus = 'р';
            pressedButtonEng = 'h';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyJ':
            pressedButtonRus = 'о';
            pressedButtonEng = 'j';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyK':
            pressedButtonRus = 'л';
            pressedButtonEng = 'k';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyL':
            pressedButtonRus = 'д';
            pressedButtonEng = 'l';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyZ':
            pressedButtonRus = 'я';
            pressedButtonEng = 'z';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyX':
            pressedButtonRus = 'ч';
            pressedButtonEng = 'x';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyC':
            pressedButtonRus = 'с';
            pressedButtonEng = 'c';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyV':
            pressedButtonRus = 'м';
            pressedButtonEng = 'v';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyB':
            pressedButtonRus = 'и';
            pressedButtonEng = 'b';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyN':
            pressedButtonRus = 'т';
            pressedButtonEng = 'n';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'KeyM':
            pressedButtonRus = 'ь';
            pressedButtonEng = 'm';
            return {
                pressedButtonRus, pressedButtonEng
            };

        case 'Semicolon':
            return pressedButtonRus = 'ж';

        case 'Quote':
            return pressedButtonRus = 'э';

        case 'Backquote':
            return pressedButtonRus = 'ё';

        case 'BracketLeft':
            return pressedButtonRus = 'х';

        case 'BracketRight':
            return pressedButtonRus = 'ъ';

        case 'Comma':
            return pressedButtonRus = 'б';

        case 'Period':
            return pressedButtonRus = 'ю';

        default:
            break;
    }

}

//выводим уровень сложности на игровое поле
let level = 'не выбран';

function drawLevel() {

    if (speedOfCat === 0.1 || speedOfCat === 0.3 || speedOfCat === 0.5) {
        if (speedOfCat === 0.1) {
            level = 'Новичок';
        }
        if (speedOfCat === 0.3) {
            level = 'Опытный';
        }
        if (speedOfCat === 0.5) {
            level = 'Мастер';
        }
    }
    ctx.font = '25px cursive';
    ctx.fillStyle = '#660000';
    ctx.fillText('Уровень сложности: ' + level, 50, 50);
}

//выводим количество съеденных орехов на экран
let score = 0;

function drawScore() {
    ctx.font = '25px cursive';
    ctx.fillStyle = '#660000';
    ctx.fillText('Собрано орехов: ' + score, 950, 50);
}

//если все орехи с буквами съедены хомяком 

let hamsterIsWinner = new Image();
hamsterIsWinner.src = 'img/isWinner.png';
hamsterIsWinner.X = 500;
hamsterIsWinner.Y = 150;

function victory() {
    ctx.drawImage(hamsterIsWinner, hamsterIsWinner.X, hamsterIsWinner.Y);
    ctx.font = '50px Arial';
    ctx.fillStyle = '#660000';
    ctx.fillText('Блестящий результат!', 400, 100);
    cancelAnimationFrame(GAME);
}

//рисуем хомяка
function drawHamster() {
    if (hamster.X === 1200) {
        victoryHamster.play();
        victory();
    }
    ctx.drawImage(hamster, hamster.X, hamster.Y);
    pressButton();
    if ((arrNuts[0].letterEng === pressedButtonEng || arrNuts[0].letterRus === pressedButtonRus) && ((lang === 'Eng' || lang === 'Rus') && (speedOfCat === 0.1 || speedOfCat === 0.3 || speedOfCat === 0.5) && start)) {
        hamster.X = arrNuts[0].x;
        crunch.play();
        arrNuts.shift();
        score += 1;
    }
}

//если кот догнал хомяка
function gameOver() {

    ctx.font = '50px Arial';
    ctx.fillStyle = '#660000';
    ctx.fillText('GAME OVER', 460, 200);
    setTimeout(() => {
        ctx.drawImage(catWon, huntingCat.X - 100, huntingCat.Y - 50);
    }, 2000);
    cancelAnimationFrame(GAME);

}

//рисуем кота
function drawHuntingCat() {
    ctx.drawImage(huntingCat, huntingCat.X, huntingCat.Y);
    if (((lang === 'Eng' || lang === 'Rus') && (speedOfCat === 0.1 || speedOfCat === 0.3 || speedOfCat === 0.5) && start)) {
        huntingCat.X += speedOfCat;
        if (huntingCat.X + 100 >= hamster.X) {
            catGreedyEats.play();
            gameOver();
        }
    }
}

//главная функция, вызывающая остальные
function game() {
    drawBackGround();
    drawFood();
    drawHamster();
    drawHuntingCat();
    drawScore();
    drawLevel();

    let GAME = requestAnimationFrame(game);
}

game();