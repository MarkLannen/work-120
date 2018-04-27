/*jshint esversion: 6 */

// backgound image variable
let bgimg;
let cWidth = 985;
let cHeight = 759;
let circle1;
let circle2;
let circle3;

function preload() {
  bgimg = loadImage('./images/Kandinsky_background-1.jpg');


}


function setup() {
    createCanvas( cWidth, cHeight );
    background(bgimg);

    // create circle objects
    circle1 = new Circle (100, 100, 50, (color(200, 0, 100)));
    circle2 = new Circle (500, 400, 150, (color(100, 0, 200)));
    circle3 = new Circle (700, 500, 250, (color(50, 200, 100)));




}

function draw() {

  circle1.show();
  // circle1.collapse();
  circle2.show();
  // circle2.collapse();
  circle3.show();
  // circle3.collapse();



}
