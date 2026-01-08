import React, { useState } from 'react';

const TicTacToe = () => {
    const [square,setSquare] = useState<string[]>(Array(9).fill(''))
    const [x,setX] = useState(false)
    const [winner, setWinner] = useState<string | null>(null);
    const winningPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  function checkWinner(board :string[] ){
    for(let p of winningPatterns){
        const [a,b,c] = p
        if(board[a] &&  board[a] === board[b] && board[a] === board[c] ){
            return board[a];
        }
        
    }
    return null;
  }
    function handleClick(index : number){
        setSquare(prev=>{
            if(prev[index] !== '')return prev;
            const newSquare = [...prev]
            newSquare[index] = x ? 'X' : 'O';
            const win = checkWinner(newSquare)
            if(win)setWinner(win)
            return newSquare
        })
        setX(prev=>!prev)
    }
    function resetGame() {
    setSquare(Array(9).fill(''));
    setX(true);
    setWinner(null);
  }

    // console.log(winner);
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">

      <h1 className="mb-4 text-4xl font-bold text-white">
        Tic Tac Toe
      </h1>

      {winner && (
        <p className="mb-4 text-xl font-semibold text-green-400">
          🎉 Winner: {winner}
        </p>
      )}

      <div className="grid grid-cols-3 gap-3">
        {square.map((val, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="flex items-center justify-center w-24 h-24 text-4xl font-bold text-white border-2 bg-slate-800 border-sky-400 rounded-xl hover:bg-slate-700 disabled:cursor-not-allowed"
            disabled={!!winner}
          >
            {val}
          </button>
        ))}
      </div>

      <button onClick={resetGame}
        className="px-6 py-2 mt-6 font-semibold text-white transition rounded-lg bg-sky-500 hover:bg-sky-600"
      >
        Reset Game
      </button>

    </div>
  );
};

export default TicTacToe;
