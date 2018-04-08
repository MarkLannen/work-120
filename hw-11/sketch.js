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

    lines.createLine();
}

/////////////////////////////////////////
//      Lines class
/////////////////////////////////////////
class Lines {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.end_x = 250;
        this.end_y = 250;
        // this.color(random(255, 10));
        // this.move_x = this.x += 25;
        // this.move_y = this.y += 25;
        // this.move_dx = this.dx;
        // this.move_dy = this.dy;
    }

    // method for creating first lines
    createLine() {
        stroke(200);
        strokeWeight(8);
        line(this.x, this.y, this.end_x, this.end_y);



    }



    // method to create second new line segment


}
