export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.round(Math.random() * 100),
});

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = (guess) => ({
    type: GUESS_NUMBER,
    guess,
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});