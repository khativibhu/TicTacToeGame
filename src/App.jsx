import './App.css'
import TicTacToe from './components/tic-tac-toe';

const initialBoard = () => Array(9).fill(null);

function App() {
  return (
    <TicTacToe/>
  );
}
 
export default App
