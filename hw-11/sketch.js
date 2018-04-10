/*jshint esversion: 6 */
// set global variable in array 'lines'
let lines = [];

// create canvas
// set background color
function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(40);
    background(221, 244, 251);
    // for loop that adds objects to array 'Lines'
    for (let i = 0; i < 13; i ++) {
    lines[i] = new Lines (0, 0, 50, 50, (color(random(255), random(255), random(255),)));
    }

}
// draw function
function draw() {
    background(221, 244, 251, 90)
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
    constructor(temp_x, temp_y, temp_end_x, temp_end_y, temp_color) {
        this.x = temp_x + (random(1200));
        this.y = temp_y + (random(600));
        this.end_x = temp_end_x + (random(1200));
        this.end_y = temp_end_y + (random(600));
        this.color = temp_color;
        // this.color(random(255, 10));
    }

    // method for creating first lines
    createLines() {
        stroke(this.color);
        strokeWeight(random(1,8));
        // line(this.x, this.y, this.end_x += random(-200, 50), this.end_y += random(-200, 50));
        line(this.x, this.y, this.end_x, this.end_y);
    }
    // method for moving lines
    moveLines() {
        stroke(this.color);
        strokeWeight(3);
        this.x = this.end_x;
        this.y = this.end_y;
        this.end_x += random(-75, 75);
        this.end_y += random(-75, 75);
    }

    // method for keeping lines in view window
    edgeLines() {
        if( this.end_x < 0){
            this.end_x = abs(this.end_x);
        }
        if( this.end_x > width ){
            this.end_x  = width - abs(width - this.end_x);
        }
        if( this.end_y < 0){
            this.end_y = abs(this.end_y);
        }
        if( this.end_y > height ){
            this.end_y  = height - abs(height - this.end_y);
        }

    }
    constrainLines() {
    this.x = constrain(this.x, 0, windowWidth);
    this.y = constrain(this.y, 0, 600);
    }
}
