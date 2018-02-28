//global variables
var bub1 = {};
bub1.x1 = 50;
bub1.y1 = 50;
bub1.w = 25;
bub1.h = 25;

var bub2 = {};
bub2.x1 = 50;
bub2.y1 = (50);
bub2.w = 25;
bub2.h = 25;


//fill color variables
var rfill = 255;
var gfill = 0;
var bfill = 0;
var afill = 255;

rfill = rfill + 100;

//stroke color variables
var rst = 5;
var gst = 200;
var bst = 10;
var ast = 150;

// stroke variable
var strW = 1;


function setup() {
createCanvas(windowWidth, 600);
background(158, 209, 251);

bub2.y1 = (height * 0.5, height);
}

function draw() {
// draw bubble 1
stroke(rst, gst, bst, ast);
strokeWeight(strW);
// stroke('red');
fill (rfill, gfill, bfill, afill);
ellipse( bub1.x1, bub1.y1, bub1.w, bub1.h);

// draw bubble 2
ellipse( bub2.x1, bub2.y1, bub2.w, bub2.h);

// generate random bubbles - bub1
bub1.x1 = random(0, width);
bub1.y1 = random(0, height * 0.5);
bub1.w = random(2, 50);
bub1.h = random(2, 50);

// generate random bubbles - bub2
bub2.x1 = random(0, width);
bub2.y1 = random(height/2, height);
bub2.w = random(2, 10);
bub2.h = random(2, 10);




}
