
// function play() {
//     homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList);


//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')

  

// }

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log("Your Random Alphabet", alphabet);
    


    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    setBackgroundColorById(alphabet)
    
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
