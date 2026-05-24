import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const {board, calculateWinner, handleClick, getStatusMessage, resetGame} = useTicTacToe();

  return (
    <div className="game">

        <h1>Tic Tac Toe</h1>
       <div className={calculateWinner(board)? "status-green" : "status"}>
           { getStatusMessage() }
       </div>

       <div className="board"> 
       {   board.map((b, index)=> {
            return <button className="cell" key={index} onClick={()=> handleClick(index)} disabled= {b !== null}> 
                    { b }
                   </button> 
        })
       }
       </div>

       <button className="reset-button" onClick= {resetGame}> Reset Game </button>

    </div>
  )
}

export default TicTacToe;