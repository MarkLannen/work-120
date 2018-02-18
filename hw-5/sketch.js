function setup() {
createCanvas(windowWidth, 800);
}

var rChannel = 1;
var gChannel = 255;
var bChannel = 150;
var stroke1 = 1;
var stroke2 = 2;
var stroke3 = 3;
var stroke4 = 4;
var stroke5 = 5;
var ellipseW = 50;


function draw() {
    background(rChannel, gChannel, bChannel);
fill(180);
strokeWeight(stroke1 + 1);
// ellipse (ellipseW, 10, 400, 50, 50);
fill(255, 0, 0);
// ellipse( ellipseW, 50, 100);

ellipseW = ellipseW + 3;
stroke1 = stroke1 + 0.05;
rChannel = rChannel + 0.3;
gChannel = gChannel - 0.3;


}
