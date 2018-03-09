

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 10;
ball.scale_y = 10;


var r = 0;
var g = 0;
var b = 0;

var br = 50;
var bg = 50;
var bb = 50;

// var shapeEllipse = ellipse;
// var shapeRectangle = rect

var sW = 5;

function setup() {
    createCanvas(windowWidth, 400);
    background(br, bg, bb);

}



function draw() {

    frameRate(60);

    ball.x += ball.delta_x * ball.scale_x * 1.2;
    ball.y += ball.delta_y * ball.scale_y * 1.2;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    // conditional statement that says if ball gets 25%
    //across canvas width, increment size by 1 each frame.

    if (ball.x <= width * 0.20 || ball.x >= width * 0.80) {
        ball.width ++;
    } else{
        ball.width --;
    }

    ball.width = constrain(ball.width, 2, 35);

    fill(r*2, g/2, b*2);
    stroke(r, g, b);
    strokeWeight(sW);
    ellipse(ball.x, ball.y, ball.width, ball.width);
    r = random(255);
    g = random(255);
    b = random(255);
    sW = map(mouseX, 0, width, 1, 4);

}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 1, 20);
}
