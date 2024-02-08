let gameSeq = [];
let userSeq = [];

let started = false;
let level =0;

let btns = ["red","yellow","green","purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(e) {
    if(started ==false) {
        console.log("Game has Started");
        started=true;
        levelUp();
    }
  
    
});

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
//generate random color
    let randIdx =Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },400);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },400);
}
function checkAns(idx) {
    // console.log(`current level ${level}`);
 

    if(userSeq[idx] === gameSeq[idx] ) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML =`Game over! your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnPress() {
    let btn =this;
    userFlash(btn);
    // console.log(this);
    
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) {
    btn.addEventListener("click" ,btnPress); 
}

function reset() {
    started =false;
    gameSeq = [];
    userSeq = [];
    level =0;
}