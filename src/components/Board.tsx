import Square from './Square';
import { BoardState } from '../types'
import styles from './Board.module.css';

type BoardProps = {
    board : BoardState;
    onSquareClick : (index : number) => void;
};

const Board = ({ board, onSquareClick }: BoardProps) => {
    return (
        <div className = {styles.board}>
            {board.map((square, index) => (
                <Square key = {index} value = {square} onClick = {() => onSquareClick(index)} />
            ))}
        </div>
    )
}

export default Board;