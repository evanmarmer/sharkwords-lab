//letting the app know what letter are in the alphabet. this is a string!
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//creating a func that takes in two parameters
function setupGuesses(element, handleGuess) {
  //splits each letter in the alphebet into individual strings and loops over them
  alphabet.split('').forEach((letter) => {
    //creates button
    const btn = document.createElement('button');
    // inner text of button is 'letter'
    btn.innerText = letter;
    //listens for click and passes to handleGuess function
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    //adds btn to element
    element.append(btn);
  });
}

export default setupGuesses;
