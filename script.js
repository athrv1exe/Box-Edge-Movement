var startBtn = document.getElementById('startBtn')
var resetBtn = document.getElementById('resetBtn')
var stopBtn = document.getElementById('stopBtn')

var child1 = document.getElementById('child1')
var child2 = document.getElementById('child2')
var child;

startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)
var speed = 2;
var x = 0;
var y = 0;
var direction = 'down';

var xPos = document.getElementById('X')
var yPos = document.getElementById('Y')
var Dir = document.getElementById('dir')

var offsetX = 0;
var offsetY = 0;

function reset(){
    stop();
    x = 0;
    y = 0;
    offsetX = 0;
    offsetY = 0;
    clearInterval(child)
    direction = 'down';
    child1.style.top =  x + 'px';
    child1.style.left =  y + 'px';
    child2.style.bottom = x + 'px'
    child2.style.right = y + 'px'
    startBtn.classList.remove('disable')
    // xPos.innerHTML = `x = ${x}`
    // yPos.innerHTML = `x = ${y}`
    // Dir.innerHTML = `Dir = ${direction}`
    
}

function stop(){
    clearInterval(child)
    startBtn.classList.remove('disable')
}

function start(){
    child = setInterval(moveBox, 10);
    moveBox;
    startBtn.classList.add('disable')
}

function moveBox(){
    if(direction == 'down'){
        if(x <= 418 - offsetY){
            x += speed;
        }
        else{
            direction = 'right';
        }
    }
    else if(direction == 'right'){
        if(y <= 418 - offsetX){
            y += speed;
        }
        else{
            direction = 'up';
        }
    }
    else if(direction == 'up'){
        if(x >= offsetY){
            x -= speed;
        }
        else{
            direction = 'left';
            offsetX += 80
        }
    }
    else if(direction == 'left'){
        if(y >= offsetX){
            y -= speed
            
        }
        else{
            direction = 'down';
            offsetY += 80;
        }
    }
    child1.style.top = x + 'px'
    child1.style.left = y + 'px'
    child2.style.bottom = x + 'px'
    child2.style.right = y + 'px'

    // xPos.innerHTML = `x = ${x}`
    // yPos.innerHTML = `x = ${y}`
    // Dir.innerHTML = `Dir = ${direction}`

}