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
    circle1 = new Circle (239, 369, 60, (color(47, 35, 94)));
    circle2 = new Circle (239, 369, 140, (color(180, 173, 131)));
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
