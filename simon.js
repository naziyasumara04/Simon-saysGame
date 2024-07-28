let gameseq=[]
let userseq=[]
let btns=["red","green","yellow","purple"];
let highscore=0;
let level=0;
let levels=gameseq;
let started=false;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomidx=Math.floor(Math.random()*3);
    let randomcolor=btns[randomidx];
    let randombtn=document.querySelector(`.${randomcolor}`);

    gameseq.push(randomcolor);
    console.log(gameseq);
    // console.log(randomidx);
    // console.log(randomcolor);
    // console.log(randombtn);
    flashbtn(randombtn);
    
}
function checkans(idx){
   
   if(gameseq[idx]===userseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
    }
   }else{
    h2.innerHTML=`game over!<b>your score was ${level}</b><br>press any key to restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";

    },150);
    reset();

   }
}
function btnpress(){
   
    let btn = this;
    userflash(btn);

    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);

    checkans(userseq.length-1);
    
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
   // highscore();

}
// function highscore(){
//     if(level<gameseq){
//         h3.innerText=`${level}`;
//     }else{
//         h3.innerText="";
//     }

// }
for(score of levels){
    if (score>highscore){
        highscore++;
    }
}
h3.innerText=`highscore is${highscore}`;