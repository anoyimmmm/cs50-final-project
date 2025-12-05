// constants and variables declaration
let inputDir = {x: 0, y: 0}; 
const board = document.getElementById('board');
const scoreBox = document.getElementById('scoreBox');
const gameOverDiv = document.getElementById('gameOver');
const finalScoreSpan = document.getElementById('finalScore');
let speed = 7;
let score = 0;
let lastPaintTime = 0;

// create the snake array
let snakeArr = [
    {x: 13, y: 15}
];

// food for the snake
let food = {x: 6, y: 7};

function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake) {
    // self bump 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // wall hit
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;
}

function gameEngine(){  // ADD THIS LINE - you were missing it!
    // collision check
    if(isCollide(snakeArr)){
        inputDir = {x: 0, y: 0}; 
        finalScoreSpan.textContent = score;
        gameOverDiv.style.display = 'block';
        return;
    }

    // food eaten case
    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        score += 1;
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    // Movements
    for (let i = snakeArr.length - 2; i>=0; i--) { 
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // render the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // render the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}  // ADD THIS CLOSING BRACE


window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{

    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }

});

function restartGame() {
    snakeArr = [{x: 13, y: 15}];
    inputDir = {x: 0, y: 0};
    score = 0;
    scoreBox.innerHTML = "Score: 0";
    food = {x: 6, y: 7};
    gameOverDiv.style.display = 'none';
}