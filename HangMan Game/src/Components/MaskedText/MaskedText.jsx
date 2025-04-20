import { getAllCharacters } from "./MaskedTextUtility";

function MaskedText({ text, usedLetters = [] }) {
    const letters = getAllCharacters(text, usedLetters).split('');

    return (
        <>
            {letters.map((letter, index) => {
                return (
                    <span key={`letter-${index}`} className="inline-block mx-2 font-bold">
                        {letter}
                    </span>
                );
            })}
        </>
    );

}

export default MaskedText;
// This component is a placeholder and does not contain any functionality.