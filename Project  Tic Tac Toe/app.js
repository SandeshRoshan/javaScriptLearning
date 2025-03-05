
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector(".msg");
msg.innerText = ``;

let move = 0;
let turnO = true; // playerX, playerO

 const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];



boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            msg.innerText = `Now X Turn`;
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "#FCEDB4";
            msg.innerText = `Now O Turn`;
            turnO = true;
        }
        box.disabled = true;
        move++;
        if(move < 9){
            checkWinner();
        }else{
            msg.innerText = `Game Is Draw`;
        }

    });
});

const checkWinner= () =>{
    for(let pattern of winPattern){
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;
       if(pos1Val != "" && pos2Val != "" &&pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val ){
            msg.innerText = `Winner is ${pos1Val}`;
            boxes.forEach((box) =>{
                box.disabled = true;
            });
        }
       }
    }
};

const reset = () => {
    boxes.forEach((box) =>{
        box.disabled = false;
        box.innerText = "";
        msg.innerText = ``;
        move = 0;
    });
}

resetBtn.addEventListener("click", () =>{
    reset();
});