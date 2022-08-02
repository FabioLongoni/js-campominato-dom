//richiamiamo il container
const gridContainer = document.querySelector('.grid');
//richiamiamo il button
const playButton = document.getElementById('play_button');
//richiamare select
const levelSelectElement = document.querySelector('select[name="difficult"]');

playButton.addEventListener('click', startGame) ;

let bombPosition = [];
    
function startGame() {

    resetGame();
    const levelDifficult = levelSelectElement.value
    console.log(levelDifficult);

    let dimension = gridCalc(levelDifficult);
    
    bombPosition = bombGenerator(dimension ** 2);
    console.log(bombPosition);
    
    makeGrid(dimension);
    
}

function makeGrid(gridDimension) {

    const gridSize = gridDimension ** 2;

    for (let i = 0; i < gridSize; i++) {
        const cell = getSquareElement();
        
        cell.style.flexBasis = `${100 / gridDimension}%`
        cell.innerHTML = i + 1;
        gridContainer.append(cell);
    }

}

function bombGenerator(max) {
    const bomb = [];

    while (bomb.length < 16 ) {
        const n = getRandomIntInclusive(1, max);
        if(!bomb.includes(n)) {
            bomb.push(n);
        }
    }

    return bomb
}


function getSquareElement() {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('click',clickHover);
    return square;
}

function clickHover() {
    // this.classList.toggle('click_hover');
    const cellNumber = parseInt(this.innerHTML);
    // console.log(cellNumber);
    // console.log(bombPosition.includes(cellNumber));
    let className = 'success';
    if (bombPosition.includes(cellNumber)) {
        className = 'bomb';
    }

    this.classList.add(className);
}

function resetGame() {
    gridContainer.innerHTML = '';
}

function gridCalc (levelDifficult) { 

    let dimension = 10;

    if (levelDifficult === 'hard') {
        dimension = 9;
    } else if (levelDifficult === 'impossible') {
        dimension = 7;
    }

    return dimension;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
