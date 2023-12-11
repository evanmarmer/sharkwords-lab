import './style.css';
import getRandomWord from './src/randomWord.js';
import { setSharkImage } from './src/sharkImage.js';
import { setupWord, isLetterInWord,revealLetterInWord } from './src/word.js';


document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;


const initSharkwords = () => {
  const word = getRandomWord();
  let numWrong = 0;
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
  setSharkImage(document.querySelector('#shark-img'), numWrong);
  setupWord(document.querySelector('#word-container'), word);
  console.log(isLetterInWord(word[0]), '(should be true)');
console.log(isLetterInWord('1'), '(should be false)');
revealLetterInWord(word[0])

  const handleGuess = (guessEvent, letter) => {
    
    const button = guessEvent.target;
    button.setAttribute('disabled', true);
  
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter);
    } else {
      numWrong += 1;
      setSharkImage(sharkImgEl, numWrong);
    }
  
  };

  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);
};





initSharkwords();
