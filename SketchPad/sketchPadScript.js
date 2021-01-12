// SketchPad script

let container = document.querySelector('#container');
let div = [];
let numSq;
let q = 1;
let squares = 10;

resize();

// add Reset button, to reset the color of the grid elements
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);

function resetGrid() {
	for (let i = 0; i < numSq; i++) {
		div[i].style.backgroundColor = 'white';
	}
}
const input = document.querySelector('#input');
// color divs in black
let blackColorButton = document.querySelector('#blackColor');
blackColorButton.addEventListener('click',  () => {
	q = 1 
	input.setAttribute("value", "black");
});

// add randomColorButton to change the color of the grid elements
let randomColorButton = document.querySelector('#randomColor');
randomColorButton.addEventListener('click', () => {
	q = 2
	input.setAttribute("value", "random");
});

// function for changing the color of the divs in the grid
function toggleColor() {
	if (q === 1) {
		this.style.backgroundColor = "black";
	} else if (q === 2) {
		this.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
	}
}

let resizeButton = document.querySelector('#resize');
resizeButton.addEventListener('click', addSquares);

function addSquares() {
	squares = prompt();
	resize();
}

// resize the grid 
function resize() {
	for (let i = 0; i < numSq; i++) {
		let w = div[i];
		w.remove();
	}
	if (squares === null || squares === "") {
		squares = 10;
	}
	numSq = squares * squares;
	for (let i = 0; i < numSq; i++) {
		div[i] = document.createElement('div');
		div[i].className = 'gridElement';
		div[i].style.width = `${500/squares}px`;
		div[i].style.height = `${500/squares}px`;
		div[i].addEventListener('mouseenter', toggleColor);
		container.appendChild(div[i]);
	};
}









