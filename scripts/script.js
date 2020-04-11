let size=256;
const container = document.querySelector('#container');

function hoverListener(){
    let allCells=document.querySelectorAll('.cell');
    console.log(allCells);
    allCells.forEach(cell => cell.addEventListener('mouseover', function () {
        cell.style.backgroundColor = "black";
    }));
}

function generateGrid(size){
    let myDiv;
    const item = document.querySelector('.item');
    for (let i =0;i<size;i++){
        myDiv=document.createElement('div');
        myDiv.className="cell";
        item.appendChild(myDiv);
    }
}

generateGrid(size);
hoverListener();