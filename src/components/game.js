import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default function Game(props) {
    /*
    newGame() {
        this.setState({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
        });
    }*/

    return (
        <div>
            <Header />
            <GuessSection />
            <GuessCount />
            <GuessList />
        </div>
    );
}

