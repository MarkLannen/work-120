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
var afill = 100;

rfill = rfill + 100;

//stroke color variables
var rst = 10;
var gst = 200;
var bst = 200;
var ast = 200;

// stroke variable
var strW = 1;


function setup() {
createCanvas(windowWidth, 600);
background(158, 209, 251);
}

function draw() {
// draw bubble 1
push();
stroke(rst, gst, bst, ast);
strokeWeight(strW);
fill (rfill, gfill, bfill, afill);
ellipse( bub1.x1, bub1.y1, bub1.w, bub1.h);

// change fill and stroke colors for bub1
rfill = random(0, 255);
rfill = constrain(rfill * 10, 0, 255);
gfill = random(0, 255);
gfill = constrain(gfill * 2, 0, 255);
bfill = random(0, 255);
bfill = constrain(bfill/2, 0, 255);
strW = random(strW/2, 1);

pop();

// draw bubble 2
stroke(rst, gst, bst, ast);
strokeWeight(strW);
fill (rfill, gfill, bfill, afill);
ellipse( bub2.x1, bub2.y1, bub2.w, bub2.h);

// generate random bubbles - bub1
bub1.x1 = random(0, width * 0.5);
bub1.y1 = random(0, height * 0.5);
bub1.w = random(2, 50);
bub1.h = random(2, 50);

// generate random bubbles - bub2
bub2.x1 = random(width * 0.5, width);
bub2.y1 = random(height/2, height);
bub2.w = random(2, bub2.w * 1.1 - 10);
bub2.h = random(2, 15);




}
