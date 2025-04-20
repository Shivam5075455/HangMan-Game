const ALPHABETS = new Array(26).fill('').map((element, index) => String.fromCharCode(index+65));

function LetterButton({text, usedLetters, onLetterClick}){

    const originalCharacters = new Set(text.toUpperCase().split(''));
    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));

    const buttonStyle = function(letter){
        if(selectedLetters.has(letter)){
            
            return `${originalCharacters.has(letter) ? 'text-red-700 bg-green-500 hover:bg-green-700 ' : 'text-white bg-red-500 hover:bg-red-700'}`;
        }else{
            return 'bg-blue-500 hover:bg-blue-700';
        }
    }

    const handleClick = function(event){
        const character = event.target.value;
        onLetterClick?.(character);
    }
    const buttons = ALPHABETS.map(letter => {
        return(
            <button 
                key={`letter-${letter}`}
                value={letter}
                disabled={selectedLetters.has(letter)}
                onClick={handleClick
                   
                }
                className={`text-xl  text-white font-bold py-2 px-4 rounded-full mx-2 my-1 ${buttonStyle(letter)}`}>
                {letter}
            </button>
        );
})

return(
    <>
        {buttons}
    </>
)

}

export default LetterButton;