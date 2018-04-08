/*jshint esversion: 6 */
// set global variable in array 'lines'
let lines1;
let lines2;

// create canvas
//set background color
function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(1);
    background(221, 244, 251);
    lines1 = new Lines(25, 25, 100, 100);
    lines2 = new Lines(50, 50, 150, 150);

}
// draw function
function draw() {

    lines1.createLines();
    lines1.moveLines1();
    lines2.createLines();
    lines2.moveLines1();
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
    moveLines1() {
        stroke(200);
        strokeWeight(3);
        this.x = this.end_x;
        this.y = this.end_y;
        this.end_x = this.end_x += random(25, 75);
        this.end_y = this.end_x += random(25, 75);
    }

}
