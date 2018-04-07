/*jshint esversion: 6 */
// set global variable in array 'lines'
let lines = [];
let num_of_lines = 25;

// create canvas
//set background color
//set if statement to iterate to push variables into lines array using an object. Will push in 10 objects with 4 key: value pairs.
function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(30);
    background(221, 244, 251);
    // for loop to push 7 objects in to array 'lines'
    for (var i = 0; i < 7; i++) {
        // push objects with begininng x and ending x and color into array.
        lines.push(
            {
                x: 0,
                y: 0,
                dx: 2,
                dy: 3,
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
        // Call drawLine function
        drawLine(i);

    }

}

// define drawLine function
function drawLine(idx) {
    //declare variables for ending x and y coordinates
    let temp_x, temp_y;
    // initialize variables so that their values take on random #
    // between 0 and 50 and are then multiplied by the value of dx and dy
    // from the array 'lines'
    temp_x = lines[idx].x + (random(50) * lines[idx].dx);
    temp_y = lines[idx].y + (random(50) * lines[idx].dy);

    //set stroke weight to random
    strokeWeight(random(10));
    // set stroke color
    stroke( lines[idx].color );
    // draw line function. values taken from array 'lines'
    line(lines[idx].x, lines[idx].y, temp_x, temp_y);

    // After each line is draw, this code resets the starting x coordinate
    // where the previous ending x coordinate is. Gives the illusion of a
    // continuous line.
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

// function pinkLine(idx) {
//     if (lines[idx] === 3) {
//         lines.color == (rgb(255, 0, 255));
//     }
// }
