// JavaScript per gestionar el joc
let username = "";
let selectedWord = "";
let wordMask = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;
let usedLetters = [];

// Inicialitza el joc
function startGame() {
    username = document.getElementById("username").value;
    if (username === "") {
        alert("Introdueix el teu nom d'usuari abans de començar el joc.");
        return;
    }

    // Aquí pots inicialitzar la lògica per triar una paraula aleatòria segons la categoria.
    // Per simplicitat, farem servir una paraula fixa com a exemple.
    selectedWord = "VIATGE";
    wordMask = Array(selectedWord.length).fill("_");

    // Mostra la paraula màscara i les lletres disponibles
    updateWordContainer();
    generateAlphabet();
}

// Actualitza la paraula màscara i comprova si el joc ha acabat
function updateWordContainer() {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = `<p>${wordMask.join(" ")}</p>`;

    // Comprova si totes les lletres han estat encertades
    if (!wordMask.includes("_")) {
        endGame(true);
    }
}

// Genera les lletres de l'abecedari i gestiona els clics
function generateAlphabet() {
    const lettersContainer = document.getElementById("letters-container");
    const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    for (let letter of alphabet) {
        const letterButton = document.createElement("button");
        letterButton.textContent = letter;
        letterButton.onclick = function() {
            handleLetterClick(letter);
        };
        lettersContainer.appendChild(letterButton);
    }
}

// Gestiona el clic d'una lletra
function handleLetterClick(letter) {
    if (usedLetters.includes(letter)) {
        alert("Ja has utilitzat aquesta lletra. Prova una altra.");
        return;
    }

    usedLetters.push(letter);

    if (selectedWord.includes(letter)) {
        // La lletra és correcta
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                wordMask[i] = letter;
            }
        }
        updateWordContainer();
    } else {
        // La lletra és incorrecta
        incorrectGuesses++;
        updateHangman();
    }

    // Comprova si s'han superat els errors màxims
    if (incorrectGuesses >= maxIncorrectGuesses) {
        endGame(false);
    }
}

// Actualitza el dibuix del penjat
function updateHangman() {
    const hangmanContainer = document.getElementById("hangman-container");
    hangmanContainer.innerHTML = `<p>Errors: ${incorrectGuesses}/${maxIncorrectGuesses}</p>`;
    // Aquí pots afegir la lògica per mostrar les parts del penjat segons els errors.
}

// Finalitza el joc i mostra la informació educativa
function endGame(isWinner) {
    const infoContainer = document.getElementById("info-container");
    const playAgainButton = document.getElementById("play-again");
    playAgainButton.style.display = "block";

    if (isWinner) {
        infoContainer.innerHTML = `<p>Enhorabona, ${username}! Has encertat la paraula.</p>`;
    } else {
        infoContainer.innerHTML = `<p>Ho sentim, ${username}. Has superat el límit d'errors.</p>`;
    }

    // Aquí pots afegir informació educativa relacionada amb la paraula o categoria.
}

// Reinicia el joc
function playAgain() {
    const wordContainer = document.getElementById("word-container");
    const hangmanContainer = document.getElementById("hangman-container");
    const lettersContainer = document.getElementById("letters-container");
    const infoContainer = document.getElementById("info-container");
    const playAgainButton = document.getElementById("play-again");

    wordContainer.innerHTML = "";
    hangmanContainer.innerHTML = "";
    lettersContainer.innerHTML = "";
    infoContainer.innerHTML = "";
    playAgainButton.style.display = "none";

    selectedWord = "";
    wordMask = [];
    incorrectGuesses = 0;
    usedLetters = [];

    startGame();
}

// Podeu afegir la lògica per gestionar la persistència de dades aquí.
