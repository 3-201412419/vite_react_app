import { Player } from '../types';
import styles from './Square.module.css'

type SquareProps = {
    value : Player;
    onClick : () => void;
}

const Square = ({ value , onClick}: SquareProps) => {
    return (
        <button className = {styles.square} onClick = {onClick}>
            {value}
        </button>
    )
}

export default Square;