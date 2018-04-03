/*jshint esversion: 6 */
// set both global variables
let x1 = 0;
let y1 = 0;
let delta_y = 1;


// create canvas
//set background color
//set up first array to iterate the number of lines
function setup() {
    createCanvas( windowWidth, 600 );
    background(150, 225, 150);
    // for ( let i = 0; i < 10; i++) {
    // }
}

function draw() {
    //second array to iterate number of lines generated (10)
    //set frameRate
    //call both functions
    for ( let i = 0; i < 10; i++) {
        //
        frameRate(5);
        drawLine();
        moveLine();



    }

}

// define drawLine function
function drawLine() {
    strokeWeight(random(5));
    stroke(random(255), random(255), random(255));
    line(x1, y1, x1 + random(50), y1 + random(50));
}
// define moveLine function
function moveLine() {
    x1 = x1 + random(5);
    y1 = y1 + (random(15) * delta_y);

    // bounce lines back across screen
    if (x1 > windowWidth || x1 < 0) {
        x1 = x1 * -1;
    }

    if (y1 > 600 || y1 < 0) {
        delta_y = delta_y * -1;
    }
    // set constraints on both variables so that they stay within the screen
    x1 = constrain(x1, 0, windowWidth);
    // y1 = constrain(y1, 0, 600);
}
