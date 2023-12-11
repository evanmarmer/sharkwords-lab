let word;
function setupWord(element, initWord) {
    word = initWord
    word.split('').forEach(() => {
        let letterBox = document.createElement('div')
        letterBox.className = 'letter-box'
        element.appendChild(letterBox)
    })
}

function isLetterInWord(letter) {
if(word.includes(letter)){
    return true
} else {
    return false
}
}

function revealLetterInWord(letter) {
    const letterBox = document.querySelectorAll('.letter-box')
    word.split('').forEach((wordLetter, idx) => {
        if (wordLetter === letter) {
          letterBox[idx].innerHTML = letter;
        }
      });
    }





export{setupWord, isLetterInWord,revealLetterInWord}
