export type Player = 'X' | 'O' | null;
export type BoardState = Player[];

export type GameState = {
    board : BoardState;
    currentPlayer : Player;
    winner : Player;
    isDraw : boolean;
}

export type Move = number;