// setup function
function setup() {
  // create canvas to draw on
  createCanvas(800, 600);
}

function draw() {

  // background
  background( "rgb(183, 183, 183)");

  /***************************/
  /*main sandbox*/
  /**************************/
  push();

  // set the grid center (x:0, y:0)
  // to canvas center
  translate(400, 300);

  /*************************/
  /* background*/
  /*************************/

  /* mount sentinel */
  //up slope
  push();
  strokeWeight(2);
  stroke(120);
  line( -40, 125, 250, -100);

  //top
  noFill();
  rotate(radians(.1));
  arc(280, -85, 78, 50, radians(210), radians(320));

  //down slope
  line(300, -107, 400, -50);

  /* the 'M' */
  // horizontal lines
  stroke(255);
  strokeWeight(4);
  strokeCap(SQUARE);
  line(170, 0, 182, 0);
  line(229, 0, 240, 0);
  line(220, 50, 240, 50);
  line(170, 50, 190, 50);

  // vertical lines
  line(180, 0, 180, 50);
  line(231, 0, 231, 50);

  //slanted lines
  line(180, 0, 205, 30);





  pop();


  /**************************/
  /*body*/
  /**************************/



  push();

  pop(); // BODY END!




}
