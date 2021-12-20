// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const difficultySelector = document.getElementById('difficulty-selector');
const playButton = document.getElementById('play-button');
const containerGame = document.getElementById('container-game');

function createCells(numberCell, boxClass) {
    let tempString = ``;
    for (let i = 1; i <= numberCell; i++) {
        tempString += `
        <div class="ms_box ms_box-${boxClass}">
            <span class="ms_box-number">${i}</span>
        </div>`
    }
    containerGame.innerHTML = tempString;
}

function createGame(difficulty) {
    if (difficulty == 'easy') {
        createCells(100, 'easy');
    }else if (difficulty == 'medium') {
        createCells(81, 'medium');
    }else {
        createCells(49, 'hard');
    }
}

function selectBox() {
    let boxs = document.querySelectorAll('main #container-game .ms_box');
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener('click', function() {
            if (this.classList.contains('ms_box-active')) {
                this.classList.remove('ms_box-active');
            }else {
                this.classList.add('ms_box-active');
            }
        });
    }
}

playButton.addEventListener('click', function() {
    createGame(difficultySelector.value);
    selectBox();
});



