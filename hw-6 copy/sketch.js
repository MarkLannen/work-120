//global variables
var bub1 = {};
bub1.x1 = 50;
bub1.y1 = 50;
bub1.w = 25;
bub1.h = 25;

var bub2 = {};
bub2.x1 = 50;
bub2.w = 25;
bub2.h = 25;


//color variables
var rfill = 0;
var gfill = 255;
var bfill = 0;
var afill = 255;

// stroke variable
var strW = 1;


function setup() {
createCanvas(windowWidth, 600);
background(158, 209, 251);

bub2.y1 = constrain(height * 0.5, height);
}

function draw() {
// draw bubble 1
stroke(rfill, gfill - 100, bfill, afill);
strokeWeight(strW);
// stroke('red');
fill (rfill - 50, gfill, bfill + 50, afill);
ellipse( bub1.x1, bub1.y1, bub1.w, bub1.h);

// draw bubble 2
ellipse( bub2.x1, bub2.y1, bub2.w, bub2.h);

// generate random bubbles - bub1
bub1.x1 = random(0, width);
bub1.y1 = random(0, height * 0.5);
bub1.w = random(2, 5);
bub1.h = random(2, 5);

// generate random bubbles - bub2
bub2.x1 = random(0, width);
bub2.y1 = random(height/2, height);
bub2.w = random(2, 5);
bub2.h = random(2, 5);

// generate different stroke colors
// rfill = (rfill % 3) + 50;
// gfill = gfill % 6;
// bfill = bfill % 9;

// generates different fill colors
// rfill = rfill % 3;
// gfill = gfill % 6;
// bfill = bfill % 9;
//
//
//
// strW = constrain(2, 1, 5);
//
//



}
