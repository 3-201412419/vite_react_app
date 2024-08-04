import Board from './Board';
import { useGameLogic }  from '../hooks/useGameLogic';
import styles from './Game.module.css';

const Game = () => {
    const { gameState, makeMove, resetGame}  = useGameLogic();

    return (
        <div className = {styles.game}>
            <h1>Tic-Tac-Toe</h1>
            <Board board = {gameState.board} onSquareClick = {makeMove} />
            <div className = {styles.gameInfo}>
                {gameState.winner ? (
                    <p>Winner : {gameState.winner}</p>
                ) : gameState.isDraw ? (
                    <p>It's a draw!</p>
                ) : (
                    <p>Next Player : {gameState.currentPlayer}</p>
                )}
                <button className = {styles.resetButton} onClick= {resetGame}> Reset Game</button>
            </div>
        </div>
    )
}

export default Game;