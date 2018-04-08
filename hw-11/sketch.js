/*jshint esversion: 6 */
// set global variable in array 'lines'
let lines;

// create canvas
//set background color
function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(1);
    background(221, 244, 251);
    lines = new Lines();

}
// draw function
function draw() {

    lines.createLines();
    // lines.moveLines1();

}

/////////////////////////////////////////
//      Lines class
/////////////////////////////////////////
class Lines {
    constructor() {
        this.x = 25;
        this.y = 25;
        this.end_x = this.x += 100;
        this.end_y = this.y += 100;
        // this.color(random(255, 10));
        // this.move_dx = this.dx;
        // this.move_dy = this.dy;
    }

    // method for moving lines
    // moveLines1() {
    //     stroke(200);
    //     strokeWeight(3);
    //     this.x = this.end_x;
    //     this.y = this.end_y;
    // }

    // method for creating first lines
    createLines() {
        stroke(200);
        strokeWeight(8);
        line(this.x, this.y, this.end_x, this.end_y);
    }



    // method to create second new line segment


}
