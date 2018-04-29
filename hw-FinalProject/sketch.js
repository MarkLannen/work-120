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
    triangle1 = new Triangle (100, 150, 385, 150, 236, 365, (color(23, 22, 22, 150)));
    triangle2 = new Triangle (161, 695, 238, 370, 318, 695, (color(23, 22, 22, 150)));
    triangle3 = new Triangle (375, 465, 430, 365, 488, 465, (color(23, 22, 22, 150)));
    triangle4 = new Triangle (390, 565, 431, 463, 479, 566, (color(23, 22, 22, 150)));
    triangle5 = new Triangle (398, 670, 435, 567, 469, 669, (color(23, 22, 22, 150)));
    triangle6 = new Triangle (509, 485, 741, 47, 742, 480, (color(149, 30, 46, 150)));
    triangle7 = new Triangle (769, 677, 597, 501, 945, 494, (color(173, 75, 46, 150)));
    triangle8 = new Triangle (743, 456, 744, 424, 795, 422, (color(226, 191, 70, 150)));





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
  triangle2.show();
  triangle3.show();
  triangle4.show();
  triangle5.show();
  triangle6.show();
  triangle7.show();
  triangle8.show();





}
