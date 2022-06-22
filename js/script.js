const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const clouds1 = document.querySelector('.clouds1')
const clouds2 = document.querySelector('.clouds2')
const reset = document.querySelector('.setReset')
const score = document.querySelector('.score') 
var numScore = 0


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump')
    }, 550);
}


var loop = setInterval(() => {
    
    var pipePosition = pipe.offsetLeft;
    var marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');


    console.log(pipePosition)

  

    if (pipePosition <= 2 && pipePosition >= -5 ) {

        numScore++

        score.innerHTML = `SCORE: <span>${numScore}</span>`

    } ;      

    marioPosition

    var clouds1Pause = clouds1.offsetLeft;
    var clouds2Pause = clouds2.offsetLeft;


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '76px';
        mario.style.marginLeft = '50px';

        clouds1.style.animation = 'none';
        clouds1.style.left = `${clouds1Pause}px`

        clouds2.style.animation = 'none';
        clouds2.style.left = `${clouds2Pause}px`

        clearInterval(loop)

        reset.innerHTML = "<a class='reset' href='jogo-mario.html'>RESET</a>"

    }
}, 10);

document.addEventListener('keydown', jump);