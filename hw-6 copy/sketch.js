//global variables

// bubble 1
var bub1 = {};
bub1.x1 = 50;
bub1.y1 = 50;
bub1.w = 25;
bub1.h = 25;

// bubble 2
var bub2 = {};
bub2.x1 = 50;
bub2.y1 = 50;
bub2.w = 25;
bub2.h = 25;

// rect 1
var rect1 = {
    x1: 50,
    y1: 50,
    w: 50,
    h: 50
};

// rect 2
var rect2 = {
    x1: 50,
    y1: 50,
    w: 50,
    h: 50
};

// triangle variables
var tri1 = {
    x1: 50,
    y1: 50,
    x2: 55,
    y2: 55,
    x3: 25,
    y3: 50
};

// triangle position
var tri_pos;

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
  background(141, 221, 255);
}

function draw() {
// draw bubble 1
stroke(rst, gst, bst, ast);
strokeWeight(strW);
fill (rfill, gfill, bfill, afill);
ellipse( bub1.x1, bub1.y1, bub1.w, bub1.h);

// draw bubble 2
stroke(rst, gst, bst, ast);
strokeWeight(strW);
fill (rfill, gfill, bfill, afill);
ellipse( bub2.x1, bub2.y1, bub2.w, bub2.h);

// draw rect1
stroke(rst, gst, bst, ast);
strokeWeight(strW);
fill (rfill, gfill, bfill, afill);
rect (rect1.x1, rect1.y1, rect1.w, rect1.h);

// draw rect2
stroke(rst, gst, bst, ast);
strokeWeight(strW);
fill (rfill, gfill, bfill, afill);
rect (rect2.x1, rect2.y1, rect2.w, rect2.h);

// draw moving triangle
stroke(rst, gst, bst, ast);
strokeWeight(strW);
fill (rfill, gfill, bfill, afill * 0.9);
triangle (tri1.x1, tri1.y1, tri1.x2, tri1.y2, tri1.x3, tri1.y3);

// move triangle back and forth across the screen
tri_pos = (tri1.x1, tri1.y1, tri1.x2, tri1.y2, tri1.x3, tri1.y3);

//animate triangle
tri1.x1 = width * 0.5;
tri1.y1 = (tri1.y1 + 50) % height;
tri1.x2 = width * 0.505;
tri1.y2 = (tri1.y2 + 50) % height;
tri1.x3 = width * 0.495;
tri1.y3 = (tri1.y3 + 50) % height;


// change fill and stroke colors
rfill = random(0, 255);
rfill = constrain(rfill * 10, 0, 255);
gfill = random(0, 255);
gfill = constrain(gfill * 2, 0, 255);
bfill = random(0, 255);
bfill = constrain(bfill/2, 0, 255);
afill = random(0, 255);
strW = random(strW/2, 1);

//alter stroke strokeWeight
strW = random(sqrt(1), sqrt(4)/2);


// generate random bubbles - bub1
bub1.x1 = random(0, (width * 0.5) - 50);
bub1.y1 = random(0, (height * 0.5) - 50);
bub1.w = map(bub1.x1, 0, width/2, 50, 7);
bub1.h = map(bub1.y1, 0, width/1.8, 35, 1);

// generate random bubbles - bub2
bub2.x1 = random((width * 0.5) + 50, width);
bub2.y1 = random(0, (height/2) - 50);
bub2.w = random(2, bub2.w * 1.1 - 10);
bub2.h = random(2, 15);

// generate random rectangles for rect1
rect1.x1 = random(0, (width * 0.5) - 50);
rect1.y1 = random((height * 0.5) + 30, height);
rect1.w = random(2, 20);
rect1.h = random (2, 20);

// generate random rectangles for rect2
rect2.x1 = random((width * 0.5) + 50, width);
rect2.y1 = random((height * 0.5) + 50, height);
rect2.w = map(rect2.x1, width, width/2, 50, 2);
rect2.h = map(rect2.y1, width, width/2.1, 60, 2);



}
