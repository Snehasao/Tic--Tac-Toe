let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#btn");
let msg=document.querySelector("#msg");
let btn1=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");

let turnO=true;//playerX,playerO

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnO=true;
    enableBox();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){//playerO
        box.innerText="O";
        box.classList.add("playerO");
        turnO=false;
    }else{//PlayerX
        box.innerText="X";
        box.classList.add("playerX");
        turnO=true;
    }
    box.disabled=true;

    checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBox=()=>{
    for(let box of boxes){
        box.enabled=false;
        box.innerText="";
    }
};
const showWinner=(Winner)=>{
  msg.innerHTML=`Congratulations ,Winner is ${Winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner=()=>{
 for( let pattern of winpatterns){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val !=""&& pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
           
            showWinner(pos1Val);
        }
    }
 }
};

btn1.addEventListener("click", () => {
    resetGame();
    btn1.style.backgroundColor = "#47bcff"; 
  });

btn.addEventListener("click", () => {
    resetGame();
    btn.style.backgroundColor = "#47bcff"; 
  }); 