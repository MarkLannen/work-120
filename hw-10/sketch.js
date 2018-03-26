/*jshint esversion: 6 */
let x1 = 0;
let y1 = 0;

function setup() {
    createCanvas( windowWidth, 600 );
    background(150, 225, 150);
    for ( let i = 0; i < 10; i++) {
    }
}

function draw() {
    for ( let i = 0; i < 10; i++) {
        //
        frameRate(1);
        drawLine();
        moveLine();

    }
}

function drawLine() {
    strokeWeight(5);
    stroke(300);
    line(x1, y1, x1 + random(50), y1 + random(50));
}

function moveLine() {
    x1 = x1 + random(2);
    y1 = y1 + random(2);
}

function empytFunc() {

}
