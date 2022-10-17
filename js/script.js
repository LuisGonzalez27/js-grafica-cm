// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

const playButton = document.getElementById('play');
function play(){
    let numCell;
    const bombGame = document.getElementById('bomb-game');
    bombGame.innerHTML = '';

    const levelHtml = document.getElementById('livello');
    const level = levelHtml.value;

    // scelta tra tre diversi livelli di difficoltà
    switch(level){
        case '1':
            numCell = 100;
            break;
        case '2':
            numCell = 81;
            break;
        case '3':
            numCell = 49;
            break;
    }
    // funzione che genera la cella
    function  drawCell(num) {
        const cellPersie = Math.sqrt(numCell);
        const cell= document.createElement('div');
        cell.className = 'square';
        cell.style.width = `calc(100% / ${cellPersie})`;
        cell.style.height = `calc(100% / ${cellPersie})`;

        cell.innerHTML = `
            <span>${num}</span>
        `;
        // funzione che colora di azzurro la cella
        cell.addEventListener('click',function(){
            this.classList.add('blue');
        })
        return cell;
    }
    // funzione che genera griglia di gioco
    function drawGrid(){
        const grid = document.createElement('div');
        grid.className = 'grid';
        for(i = 1; i <=numCell; i++){
            const cell = drawCell(i);
            grid.appendChild(cell);
        }
        bombGame.appendChild(grid);
    }
    drawGrid();
};
playButton.addEventListener('click', play);