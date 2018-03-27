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
        frameRate(5);
        drawLine();
        moveLine();

        // bounce lines back across screen
        if (x1 > windowWidth || x1 < 0) {
            x1 = x1 * -1;
        }

        if (y1 > 600 || y1 < 0) {
            y1 = y1 * -1;
        }

        x1 = constrain(x1, 0, windowWidth);
        y1 = constrain(y1, 0, 600);

    }

}


function drawLine() {
    strokeWeight(5);
    stroke(random(255), random(255), random(255));
    line(x1, y1, x1 + random(50), y1 + random(50));
}

function moveLine() {
    x1 = x1 + random(5);
    y1 = y1 + random(15);
}
