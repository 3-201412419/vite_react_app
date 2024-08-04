import {useState , useCallback} from 'react';
import { GameState, Move } from '../types';
import { calculateWinner, isBoardFull} from '../utils/gameHelpers';

export const useGameLogic = () => {
    const [gameState, setGameState] = useState<GameState>({
        board : Array(9).fill(null),
        currentPlayer : 'X',
        winner : null,
        isDraw : false,
    });

    const makeMove = useCallback((move : Move) => {
        setGameState((prevState) => {
            if(prevState.board[move] || prevState.winner || prevState.isDraw){
                return prevState;
            }

            const newBoard = [...prevState.board];
            newBoard[move] = prevState.currentPlayer;

            const winner = calculateWinner(newBoard);
            const isDraw = !winner && isBoardFull(newBoard);

            return {
                board : newBoard,
                currentPlayer : prevState.currentPlayer === 'X' ? 'O' : 'X',
                winner,
                isDraw,
            };
        });
    }, []);
    

    const resetGame = useCallback(() => {
        setGameState({
            board : Array(9).fill(null),
            currentPlayer : 'X',
            winner : null,
            isDraw : false,
        })
    }, []);

        return { gameState, makeMove, resetGame}
}