import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../Components/MaskedText/MaskedText";
import LetterButton from "../../Components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../../Components/HangMan/HangMan";

function PlayGame() {

    const [usedLetters, setUsedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    const maxStep = 8; // Maximum number of incorrect guesses allowed
    const location = useLocation();
    const wordSelected = location.state?.wordSelected; // Optional chaining to avoid errors if state is undefined, othrerwise it will be 
    // returned if state is defined

    const handleLetterClick = function (letter) {

        if (gameOver || gameWon) return;

        if (wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct Letter');
            const uniqueLettersInWord = new Set(wordSelected.toUpperCase());
            const guessedLetters = new Set([...usedLetters, letter]);
            // Check if all unique letters in the word have been guessed
            if ([...uniqueLettersInWord].every((char) => guessedLetters.has(char))) {
                setGameWon(true);
            }
        } else {
            console.log('Wrong Letter');
            const newStep = step + 1;
            setStep(newStep);
            if (newStep >= maxStep) {
                setGameOver(true);
            }
        }

        setUsedLetters([...usedLetters, letter])
    }

    return (
        <div>
            <h1>Play Game</h1>
            {gameWon ? (
                <>
                    <div className="text-green-500 text-2xl font-bold">Congratulations! You guessed the word:
                        <span className="text-green-600">{wordSelected}</span></div>
                </>
            ) : gameOver ? (
                <div className="text-red-500 text-2xl font-bold">Game Over! The word was:
                    <span className="text-red-300">{wordSelected}</span></div>
            ) : (
                <>
                    <MaskedText text={wordSelected} usedLetters={usedLetters} />
                    <hr />
                    <LetterButton text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
                    <HangMan step={step} />
                </>
            )}
            <hr />
            <Link to={'/start'} className="my-3 text-blue-600 underline hover:text-blue-700 mx-2 ">Start New Game</Link>
        </div>
    )
}

export default PlayGame;