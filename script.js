const dog = document.getElementById('dog');
const fire = document.getElementById('fire');
const score=document.getElementsByClassName('score');

document.addEventListener('keydown', function(event) {
    jump();
    console.log(score+=1);
});
function jump() {
  if (dog.classList !='jump') {
    dog.classList.add('jump');
  } setTimeout( function() {
    dog.classList.remove('jump')
  }, 300)
}
let isAlive = setInterval (function() {
    let dogTop = parseInt(window.getComputedStyle(dog).getPropertyValue('top'));
    let dogLeft = parseInt(window.getComputedStyle(dog).getPropertyValue('width'));
    let fireLeft = parseInt(window.getComputedStyle(fire).getPropertyValue('left'));
    if (fireLeft<50 && fireLeft>0 && dogTop>=140) {
        alert('GO')
    }
}, 10)
function countJumps() {
    for (score=0; jump(); score++) {
        console.log(score);
    }
}
countJumps();