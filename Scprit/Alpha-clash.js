
// function play() {
//     homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList);


//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')



// }


function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);



    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);



        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;


        // console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed...you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText)

        // const updatedLife = currentLife - 1;
        // currentLifeElement.innerText = updatedLife;

    }

}


document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log("Your Random Alphabet", alphabet);



    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    setBackgroundColorById(alphabet)

}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
