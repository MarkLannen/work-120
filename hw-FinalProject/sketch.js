// backgound image variable
let bgimg;

function preload() {
  bgimg = loadImage('./images/Kandinsky_background-1.jpg');
}

let cWidth = 985;
let cHeight = 759;

function setup() {
    createCanvas( cWidth, cHeight );
}

function draw() {
  background(bgimg);



}
