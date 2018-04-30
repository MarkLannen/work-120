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
let triangle11;
let triangle12;

//rectangle variables
let rect1;
let rect2;
let rect3;

// create arc variables
let arc1;
let arc2;
let arc3;


function preload() {
    bgimg = loadImage('./images/Kandinsky_background-1.jpg');


}


function setup() {
    createCanvas( cWidth, cHeight );
    // background(bgimg);

    // create circle objects
    circle1 = new Circle (239, 369, 314, (color(23, 22, 22)));
    circle2 = new Circle (239, 369, 280, (color(180, 173, 131)));
    circle3 = new Circle (239, 369, 120, (color(47, 35, 94)));

    // create triangle objects
    triangle1 = new Triangle (100, 150, 385, 150, 236, 365, (color(23, 22, 22)));
    triangle2 = new Triangle (161, 695, 238, 370, 318, 695, (color(23, 22, 22)));
    triangle3 = new Triangle (375, 465, 430, 365, 488, 465, (color(23, 22, 22)));
    triangle4 = new Triangle (390, 565, 431, 463, 479, 566, (color(23, 22, 22)));
    triangle5 = new Triangle (398, 670, 435, 567, 469, 669, (color(23, 22, 22)));
    triangle6 = new Triangle (509, 485, 741, 47, 742, 480, (color(149, 30, 46)));
    triangle7 = new Triangle (769, 677, 597, 501, 945, 494, (color(173, 75, 46)));
    triangle8 = new Triangle (743, 456, 744, 424, 795, 422, (color(226, 191, 70)));
    triangle9 = new Triangle (744, 478, 744, 458, 779, 457, (color(150, 23, 28)));
    triangle10 = new Triangle (855, 493, 816, 430, 889, 431, (color(17, 17, 17)));
    triangle11 = new Triangle (742, 378, 741, 292, 885, 377, (color(17, 17, 17)));
    triangle12 = new Triangle (743, 293, 884, 293, 884, 377, (color(148, 40, 44)));

    // create rectangle objects
    rect1 = new Rectangle (52, 49, 130, 21, (color(204, 176, 67)));
    rect2 = new Rectangle (744, 392, 187, 18, (color(241, 238, 223)));
    rect3 = new Rectangle (548, 146, 61, 61, (color(150, 29, 42)));

    // create arc objects
    arc1 = new Arc (603, 710, 604, 711, 768, 595, 922, 711, 764, 639, 604, 711,
    603, 710, (color(30, 29, 48)));
    arc2 = new Arc (727, 207, 740, 219, 864, 205, 915, 68, 858, 192, 741,
    202, 732, 196, (color(124, 30, 47)));
    arc3 = new Arc (733, 163, 740, 164, 804, 146, 854, 88, 797, 137, 739,
    147, 732, 147, (color(180, 139, 48)));




}

function draw() {
  background(bgimg);


 //draw circles
  circle1.show();
  circle1.disperse();
  circle2.show();
  circle2.disperse();
  circle3.show();
  circle3.disperse();


  //draw triangles
  triangle1.show();
  triangle2.show();
  triangle3.show();
  triangle4.show();
  triangle5.show();
  triangle6.show();
  triangle7.show();
  triangle8.show();
  triangle9.show();
  triangle10.show();
  triangle11.show();
  triangle12.show();

  // draw rectangles
  rect1.show();
  rect2.show();
  push();
  translate(170, -280);
  rotate(radians(30));
  rect3.show();
  pop();

  // draw arcs
  arc1.show();
  arc2.show();
  arc3.show();


}
