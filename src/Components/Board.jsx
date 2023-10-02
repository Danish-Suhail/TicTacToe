import { useState, useContext, useEffect } from "react";
import { Names } from './Context'; 
import Square from "./Square";
import { NavLink } from "react-router-dom";
import clickSound from "../Sounds/click.wav";
import gameOverSound from '../Sounds/gameOver.wav'

const Board = () => {
  const initialValue = Array(9).fill(null);
  const [boxValue, setBoxValue] = useState(initialValue);
  const [isX, setIsX] = useState(true);
  const {names, setNames} = useContext(Names);
  const x = names.firstPlayer;
  const o= names.secondPlayer;
  // console.log(x , o)

  const gameOver = new Audio(gameOverSound);
  gameOver.volume = 0.2;
  const click = new Audio(clickSound);
  click.volume = 0.5;

  const checkWinner = () => {
    
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        boxValue[a] !== null &&
        boxValue[a] === boxValue[b] &&
        boxValue[a] === boxValue[c]
      ) {
        if (boxValue[a] === "X"){
            return x
        } 
        else if(boxValue[a] === "O"){
            return o
        }
      //   const areAllTilesFilledIn = boxValue.every((tile) => tile !== null);
      // if (areAllTilesFilledIn) {
      //   return 'Draw';
      // }
      }
      // return;
    }
    // return false;
      const areAllTilesFilledIn = boxValue.every((tile) => tile !== null);
      if (areAllTilesFilledIn) {
        return 'Draw';
      }
      else {
        return false;
      }
  };

  const isWinner = checkWinner();
  // console.log("winner is ", isWinner)
  // console.log(x, y)


  function handleClick(index) {
    // console.log(index);
    if (boxValue[index] !== null) {
        // console.log(index);
      return;
    }
    const copyValue = [...boxValue];
    copyValue[index] = isX ? "X" : "O";
    setBoxValue(copyValue);
    setIsX(!isX);
  }

  useEffect(()=>{
    if(boxValue.some((tile) => tile !== null)){
      click.play();
    }
  },[boxValue, click]);

  useEffect(()=>{
    if(isWinner !== false){
      gameOver.play();
    }
  },[gameOver, isWinner]);

  function playAgain() {
    setBoxValue(initialValue);
    setIsX(true);
  }

  function resetNames(){
    setNames({firstPlayer: "", secondPlayer:""})
  }

  console.log(isWinner)

  return (
    <div className="flex-col justify-center items-center mt-20">
      {isWinner ? (
        <>
          <div className=" border-8 border-dotted border-[#5468ff] px-20 py-4 text-2xl text-white">
          {isWinner === 'Draw' ? <>Draw!!</>:<>{isWinner} Won</>}
          </div>
          <div className="flex justify-center items-start gap-10 mt-24">
          <button onClick={playAgain} className="bg-[#0074a6] p-3 text-xl w-[150px] border rounded-md text-white">Play again</button>
          <NavLink to= '/'><button onClick={resetNames} className="bg-[#0074a6] p-3 w-[150px] text-xl border rounded-md text-white">Reset Names</button></NavLink>
          </div>
        </>
      ) : (
        <div>
          {/* <div className="bg-[#0074a6] text-white text-4xl my-8">{isX ? x : y}'s turn</div> */}
          <div className="flex justify-center items-center">
            <div className = " right-border bottom-border cursor-pointer"><Square onClick={() => handleClick(0)} value={boxValue[0]}/></div>
            <div className = " right-border bottom-border cursor-pointer"><Square onClick={() => handleClick(1)} value={boxValue[1]} /></div>
            <div className = " bottom-border cursor-pointer"><Square onClick={() => handleClick(2)} value={boxValue[2]} /></div>
          </div>
          <div className="flex justify-center items-center">
          <div className = " right-border bottom-border cursor-pointer"><Square onClick={() => handleClick(3)} value={boxValue[3]} /></div>
          <div className = " right-border bottom-border cursor-pointer"><Square onClick={() => handleClick(4)} value={boxValue[4]} /></div>
          <div className = "  bottom-border cursor-pointer"> <Square onClick={() => handleClick(5)} value={boxValue[5]} /></div>
          </div>
          <div className="flex justify-center items-center">
          <div className = " right-border cursor-pointer"><Square onClick={() => handleClick(6)} value={boxValue[6]} /></div>
          <div className = " right-border cursor-pointer"><Square onClick={() => handleClick(7)} value={boxValue[7]} /></div>
          <div className = "cursor-pointer"><Square onClick={() => handleClick(8)} value={boxValue[8]} /></div>
          {/* <RxCross2 className=" text-8xl"/> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
