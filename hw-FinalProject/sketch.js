/*jshint esversion: 6 */

// backgound image variable
let bgimg;
let cWidth = 985;
let cHeight = 759;
let circle;

function preload() {
  bgimg = loadImage('./images/Kandinsky_background-1.jpg');


}


function setup() {
    createCanvas( cWidth, cHeight );



    circle = new Circle (100, 100, 50, (color(200, 0, 100)));


}

function draw() {
  background(bgimg);



}
