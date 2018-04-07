/*jshint esversion: 6 */
// set global variable in array 'lines'
let lines = [];
let num_of_lines = 25;

// create canvas
//set background color

function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(30);
    background(221, 244, 251);
    // for loop to add 25 objects to Lines array
    for (let i = 0; i < num_of_lines; i++) {
    lines.push( new Lines() );
    }

}
// draw function
function draw() {

    // for loop to add # of lines in Lines array to method growLines
    for (var i = 0; i < lines.length; i ++) {
        lines[i].growLines;
    }
}

/////////////////////////////////////////
//      Lines class
/////////////////////////////////////////
class Lines {
    constructor(x, y, dx, dy) {
        this.x = 100;
        this.y = 100;
        this.dx = 150;
        this.dy = 150;
        this.color(random(255, 10));
    }
}

// call this method once per frame to start and then generate new lines.
growLines() {
    this.startLine();
    this.moveLine();
}

// method to start lines
startline() {
    stroke(this.color);
    line(x, y, dx, dy);

}




// method to move lines
moveLine();
