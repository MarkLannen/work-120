//global variables
var bub = {};
bub.x1 = 50;
bub.y1 = 50;
bub.w = 25;
bub.h = 25;

//color variables
var rfill = 100;
var gfill = 100;
var bfill = 100;
var afill = 0.5;

// stroke variable
var strW = 3;


function setup() {
createCanvas(windowWidth, 600);
background('rgb(158, 209, 251)');


}

function draw() {

// draw bubble
strokeWeight(strW);
stroke( 'rgba(rfill, gfill, bfill, afill)');
fill ( 'rgba(rfill - 50, gfill, bfill + 50, afill)');
ellipse( bub.x1, bub.y1, bub.w, bub.h);

// generate random bubbles
bub.x1 = random(0, width);
bub.y1 = random(0, height);
bub.w = random(5, 25);
bub.h = random(5, 25);










}
