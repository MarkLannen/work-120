/*jshint esversion: 6 */
// set global variable in array 'lines'
let lines = [];



// create canvas
//set background color
//set if statement to iterate to push variables into lines array using an object. Will push in 10 objects with 4 key: value pairs.
function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(60);

    background(221, 244, 251);

    for (var i = 0; i < 10; i++) {
        lines.push(
            {
                x: 0,
                y: 0,
                dx: 1,
                dy: 1,
                color: color(random(255), random(255), random(255))
            }
        );
    }
}

function draw() {
    //second for loop to iterate number of lines generated (10)
    //set frameRate
    //call drawLine function
    for ( let i = 0; i < lines.length; i++) {
        //
        drawLine(i);
    }

}

// define drawLine function
function drawLine(idx) {
    let temp_x, temp_y;

    temp_x = lines[idx].x + (random(50) * lines[idx].dx);
    temp_y = lines[idx].y + (random(50) * lines[idx].dy);

    strokeWeight(random(5));
    stroke( lines[idx].color );
    line(lines[idx].x, lines[idx].y, temp_x, temp_y);

    lines[idx].x = temp_x;
    lines[idx].y  = temp_y;


    // bounce lines back across screen
    if (lines[idx].x > windowWidth || lines[idx].x < 0) {
        lines[idx].dx = lines[idx].dx * -1;
    }

    if (lines[idx].y > 600 || lines[idx].y < 0) {
        lines[idx].dy = lines[idx].dy * -1;
    }
    // set constraints on both variables so that they stay within the screen
    lines[idx].x = constrain(lines[idx].x, 0, windowWidth);
    lines[idx].y = constrain(lines[idx].y, 0, 600);
}
