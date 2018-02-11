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


  pop();

  /* the 'M' */
  push();

    translate(0, -50);
    rotate(radians(15));
    // horizontal lines
    stroke(255);
    strokeWeight(7);
    strokeCap(SQUARE);
    line(170, 0, 182, 0);
    line(228, 0, 240, 0);
    line(223, 50, 240, 50);
    line(170, 50, 190, 50);

    // vertical lines
    line(180, 0, 180, 50);
    line(231, 0, 231, 50);

    //slanted lines
    line(180, 0, 210, 29);
    line(230, 0, 206, 29);
  pop();

  /*End 'M'*/

  /*Clouds*/

    /*Cloud 1*/

    fill(255);
    noStroke();
    ellipse(100, -50, 60, 40);

  push();





  pop();


  /**************************/
  /*body*/
  /**************************/



  push();

  pop(); // BODY END!




}
