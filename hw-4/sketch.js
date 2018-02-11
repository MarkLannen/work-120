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


  pop(); // slope ends

  /* the 'M' */
  push();

    translate(100, -50);
    rotate(radians(15));
    scale(.5, .5, .5);
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
  push();

    fill(255);
    noStroke();
    ellipse(70, -190, 60, 40);
    ellipse(50, -180, 60, 40);
    ellipse(90, -170, 60, 40);
    ellipse(70, -150, 80, 40);
    ellipse(70, -160, 80, 40);
    ellipse(40, -160, 80, 40);

  /*Cloud2*/

    ellipse(290, -110, 35, 20);
    ellipse(290, -130, 40, 25);
    ellipse(310, -120, 35, 20);
    ellipse(280, -120, 35, 20);


  pop(); //clouds end

  /*********************************/
  // self portrait
  /*********************************/

  push();

  /*head*/






  pop();


  /**************************/
  /*body*/
  /**************************/



  push();

  pop(); // BODY END!




}
