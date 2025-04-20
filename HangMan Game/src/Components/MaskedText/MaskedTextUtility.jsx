export function getAllCharacters(word, usedLetters){
    // This function takes a word and an array of used letters and returns an array of guessed/used characters.
    usedLetters = usedLetters.map(letter => letter.toUpperCase());
    const guessedLetters = new Set(usedLetters);
    const characters = word.toUpperCase().split('').map(char =>{
        if(guessedLetters.has(char)){
            return char;
        }
        return '_';
    });
    return characters.join('');
}