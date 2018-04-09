/*jshint esversion: 6 */
// set global variable in array 'lines'
let lines = [];

// create canvas
//set background color
function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(10);
    background(221, 244, 251);
    // for loop that adds objects to array 'Lines'
    for (let i = 0; i < 20; i ++) {
    lines[i] = new Lines (0, 0, 50, 50);
}

}
// draw function
function draw() {
    // for loop to enacts all methods each draw loop
    // and create specified # of new lines each loop.
    for (let i = 0; i < lines.length; i ++) {
        // calls method to create line
        lines[i].createLines();
        // calls method to move x and y coordinates of new line to end of previous line
        lines[i].moveLines();
        // calls method to redirect lines that go off-screen
        lines[i].edgeLines();
        // calls method that constrains lines to stay within specified window width and height
        lines[i].constrainLines();
    }
}

/////////////////////////////////////////
//      Lines class
/////////////////////////////////////////
class Lines {
    constructor(temp_x, temp_y, temp_end_x, temp_end_y) {
        this.x = temp_x += (random(1200));
        this.y = temp_y += (random(600));
        this.end_x = temp_end_x += (random(1200));
        this.end_y = temp_end_y += (random(600));
        // this.color(random(255, 10));
    }

    // method for creating first lines
    createLines() {
        stroke(color(random(200), random(255), random(100)));
        strokeWeight(random(1,8));
        line(this.x, this.y, this.end_x += random(-200, 50), this.end_y += random(-200, 50));
    }
    // method for moving lines
    moveLines() {
        stroke(200);
        strokeWeight(3);
        this.x = this.end_x;
        this.y = this.end_y;
        this.end_x = this.end_x += random(25, 75);
        this.end_y = this.end_x += random(25, 75);
    }

    // method for keeping lines in view window
    edgeLines() {
        if (this.x > windowWidth || this.x < 0) {
            this.end_x = this.end_x * -1;
        }
        if (this.y > 600 || this.y < 0) {
            this.end_y = this.end_y * -1;
        }
    }
    constrainLines() {
    this.x = constrain(this.x, 0, windowWidth);
    this.y = constrain(this.y, 0, 600);
    }
}
