import { useState } from 'react'

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
      const [board, setBoard] = useState(initialBoard());
      const [isXNext, setIsXNext] = useState(true);  //true because initially X is going to be the first to play. So, initially, current/next turn is of Player X.

      const WINNING_PATTERNS = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
      ];
      
      const calculateWinner = (currentBoard) => {
        for(let i=0; i<WINNING_PATTERNS.length; i++){
           const [a,b,c] = WINNING_PATTERNS[i];

           if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]){
            return currentBoard[a];  //return our winner
           }
        }

        return null;
      }

      const handleClick = (index) => {
         //check winner
         const winner = calculateWinner(board);
         if(winner || board[index]) return;

         const newBoard = [...board];
         newBoard[index] = isXNext? "X" : "O";  //if current turn is of X then we put X in current cell.
         setBoard(newBoard);
         setIsXNext(!isXNext);
      }

      const getStatusMessage = () => {
          const winner = calculateWinner(board);

          if(winner) return `Player ${winner} wins!`;
          if(!board.includes(null)) return `It's a Draw!`;
          
          return `Player ${isXNext? "X": "O"} turn`;
      }

      const resetGame = () => {
         setBoard(initialBoard());
         setIsXNext(true);
      }
      
      return {board, calculateWinner, handleClick, getStatusMessage, resetGame};
}

export default useTicTacToe;