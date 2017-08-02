import {GUESS_NUMBER, NEW_GAME, TOGGLE_INFO_MODAL} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
};

export const hotColdGameReducer = (state=initialState, action) => {
    console.log(state);
    console.log(action);
    if (action.type === NEW_GAME) {
        state = Object.assign({
        }, initialState, {
            correctAnswer: action.correctAnswer
        });
        return state;
    }
    else if (action.type === GUESS_NUMBER) {

        const guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            return Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });
        }

        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        return Object.assign({}, state, {
            feedback: feedback,
            guesses: state.guesses.concat(action.guess)
        });
    }
    else if (action.type === TOGGLE_INFO_MODAL) {
         return Object.assign({}, state, {
             showInfoModal: !state.showInfoModal
        });
    }
    return state;
};