let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let turn=document.querySelector(".msg");

let turnO = true; //player x, player y
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

a=0;


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      //player o
      box.innerText = "O";
     box.style.color="rgb(216, 46, 46)";
      turnO = false;
      turn.innerText = "Player X's turn";
    } else {
      //player x
      box.innerText = "X";
      box.style.color="rgb(31, 67, 196)";
      turnO = true;
      turn.innerText = "Player O's turn";
    }
    box.disabled = true;
   
    checkWinner();
    a++;
    if(a==9){
        turn.innerText = "*It's a tie*";
        boxes.forEach((box) => {
            box.disabled = true;
            box.style.backgroundColor = "rgb(205, 137, 137)";

        });
    }
  });
});

const checkWinner = () => {
  for (let pattern of winpattern) {
      let posval1=boxes[pattern[0]].innerText;
      let posval2=boxes[pattern[1]].innerText;
      let posval3=boxes[pattern[2]].innerText;
      if(posval1==posval2 && posval2==posval3 && posval1!=""){
          console.log("winner");
          a=0;
          boxes[pattern[0]].style.backgroundColor = "rgb(69, 193, 81)";
          boxes[pattern[1]].style.backgroundColor = "rgb(69, 193, 81)";
          boxes[pattern[2]].style.backgroundColor = "rgb(69, 193, 81)";
         turn.innerText = "🎉Congratulations "+posval1 + " is the winner🎉";
          boxes.forEach((box) => {
                         box.disabled = true;
                    });
    
      }
  }
};
const resetgame=()=>{
    turnO = true;
    turn.innerText = "Player O's turn";
    a=0;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
   });
    boxes.forEach((box) => {
     box.style.backgroundColor = "rgb(255, 255, 255)";}
    );
}
resetbtn.addEventListener('click',resetgame);