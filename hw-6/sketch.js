// define global variables
// ellipse coordinates
var ell1 = {
    x: 1,
    y: 1,
    w: 10,
    h: 10
};

// color variables
var r = 255;
var g = 100;
var b = 0;
var a = 0.5;

function setup() {
    createCanvas(windowWidth - 50, 600);
    background('rgb(192, 230, 238)');
    frameRate (5);
}

function draw() {

/*****************/
// shapes
/*****************/

// color variables
var r = 255;
var g = 100;
var b = 0;
var a = 0.5;

// ellipse
strokeWeight(2);
stroke('rgba(5, 45, 76, 0.5)');
fill('rgba(r, g, b, a)');
ellipse (ell1.x, ell1.y, ell1.w, ell1.h);


/*****************/
// animations
/*****************/

// random ellipse
ell1.x = random(5, width);
ell1.y = random(5, height);
ell1.w = random(15, 25);
ell1.h += random(15, 25);

}
