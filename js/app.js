

//richiamiamo il container
const gridContainer = document.querySelector('.grid');
//richiamiamo il button
const playButton = document.getElementById('play_button');
//richiamare select
const levelSelectElement = document.querySelector('select[name="difficult"]');

playButton.addEventListener('click', makeGrid) 
  
    
function makeGrid() {

    resetGame();
    const levelDifficult = levelSelectElement.value
    console.log(levelDifficult);

    let dimension = levelGridCalc(levelDifficult);
    let gridSize = dimension **2 ;

    for (let i = 0; i < gridSize; i++) {
        const cell = getSquareElement();
        
        cell.style.flexBasis = `${100 / dimension}%`
        cell.innerHTML = i + 1;
        gridContainer.append(cell);
    }
    
}

function getSquareElement() {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('click',clickHover);
    return square;
}

function clickHover() {
    const square = this;
    square.classList.toggle('click_hover');
    console.log(square.innerHTML);
}

function resetGame() {
    gridContainer.innerHTML = '';
}

function levelGridCalc (levelDifficult) { 

    let dimension = 10;

    if (levelDifficult === 'hard') {
        dimension = 9;
    } else if (levelDifficult === 'impossible') {
        dimension = 7;
    }

    return dimension;
}