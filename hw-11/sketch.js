/*jshint esversion: 6 */
// set global variable in array 'lines'
let lines = [];


// create canvas
//set background color

function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(30);
    background(221, 244, 251);
    lines = new Lines();

}
// draw function
function draw() {


}

/////////////////////////////////////////
//      Lines class
/////////////////////////////////////////
class Lines {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.dx = 150;
        this.dy = 150;
        this.color(random(255, 10));
        // this.move_x = this.x += 25;
        // this.move_y = this.y += 25;
        // this.move_dx = this.dx;
        // this.move_dy = this.dy;
    }


// call this method once per frame to start and then generate new lines.

}

// method to create second new line segment
