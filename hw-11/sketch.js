/*jshint esversion: 6 */
// set global variable in array 'lines'
let lines = [];


// create canvas
//set background color
function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(1);
    background(221, 244, 251);
    for (let i = 0; i < 40; i ++) {
    lines[i] = new Lines(25, 25, 100, 100);
}

}
// draw function
function draw() {
    // for loop to iterate new indices to the array
    for (let i = 0; i < 40; i ++) {
        lines[i].createLines();
        lines[i].moveLines();
        lines[i].constrainLines();
    }
}

/////////////////////////////////////////
//      Lines class
/////////////////////////////////////////
class Lines {
    constructor(temp_x, temp_y, temp_end_x, temp_end_y) {
        this.x = temp_x;
        this.y = temp_y;
        this.end_x = temp_end_x;
        this.end_y = temp_end_y;
        // this.color(random(255, 10));
    }

    // method for creating first lines
    createLines() {
        stroke(color(random(200), random(255), random(100)));
        strokeWeight(random(8));
        line(this.x, this.y, this.end_x += random(10, 50), this.end_y += random(10, 50));
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
