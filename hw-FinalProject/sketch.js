/*jshint esversion: 6 */

// backgound image variable
let bgimg;

// canvas width and height variables
let cWidth = 985;
let cHeight = 759;

// circle variables
let circle1;
let circle2;
let circle3;

//triangle variables
let triangle1;
let triangle2;
let triangle3;
let triangle4;
let triangle5;
let triangle6;
let triangle7;
let triangle8;
let triangle9;
let triangle10;

function preload() {
  bgimg = loadImage('./images/Kandinsky_background-1.jpg');


}


function setup() {
    createCanvas( cWidth, cHeight );
    background(bgimg);

    // create circle objects
    circle1 = new Circle (239, 369, 314, (color(23, 22, 22)));
    circle2 = new Circle (239, 369, 280, (color(180, 173, 131)));
    circle3 = new Circle (239, 369, 120, (color(47, 35, 94)));

    // create triangle objects
    triangle1 = new Triangle (0, 200, 400, 200, 200, (color(200, 35, 94, 200)));





}

function draw() {
 //draw circles
  circle1.show();
  // circle1.collapse();
  circle2.show();
  // circle2.collapse();
  circle3.show();
  // circle3.collapse();

  //draw triangles
  triangle1.show();



}
