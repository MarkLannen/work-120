// setup function
function setup() {
  // create canvas to draw on
  createCanvas(800, 600);
}

function draw() {

  // background
  background( "rgb(200, 200, 200)");

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

  /* neck */
  push();
  stroke('rgb(90, 90, 90)');
  fill('rgb(254, 199, 189)');
  quad(-185, 60, -220, 120, -100, 120, -120, 60);
  triangle(-220, 120, -130, 170, -100, 120);
  stroke('rgb(254, 199, 189)');
  strokeWeight(3);
  line(-218, 120, -102, 120);
  pop();

  /*head*/
  stroke('rgb(90, 90, 90)');
  fill('rgb(254, 199, 189)');

  quad(-240, -100, -225, 50, -75, 50, -60, -100);
  quad(-225, 50, -180, 80, -130, 80, -75, 50);
  stroke('rgb(254, 199, 189)');
  strokeWeight(2);
  line(-223, 50, -77, 50)

  // mouth
  stroke(100);
  strokeWeight(3);
  line(-165, 40, -140, 40);

  noFill();
  arc(-140, 25.5, 30, 30, 0, HALF_PI);

  // end mouth

  //nose

  point(-157, 0);
  point(-143, 0);

  // end nose

  //glasses
  rect(-220, -65, 60, 50, 5, 5, 25, 25);
  rect(-140, -65, 60, 50, 5, 5, 25, 25);
  arc(-150, -55, 20, 5, PI, TWO_PI );

  /* eyes */
  //left eye

  strokeWeight(2);
  fill(255);
  ellipse(-110, -40, 30, 15);
  fill('rgba(54, 163, 233, 0.75)');
  ellipse(-110, -40, 17, 15);
  fill(120);
  ellipse(-110, -40, 5, 5);
  strokeWeight(3);
  line(-120, -50, -100, -57);

  //right eye

  line(-200, -40, -175, -40);
  noFill();
  arc(-187, -45, 25, 10, PI, TWO_PI);

  /* end eyes*/

  /*hair*/
  //left part

  arc(-200, -95, 120, 80, radians(180), TWO_PI);
  arc(-200, -95, 110, 80, radians(160), TWO_PI);
  arc(-200, -95, 100, 80, radians(170), TWO_PI);
  arc(-200, -95, 90, 70, radians(160), TWO_PI);
  arc(-200, -95, 83, 60, radians(170), TWO_PI);
  arc(-200, -95, 77, 50, radians(170), TWO_PI);
  arc(-200, -95, 75, 47, radians(170), TWO_PI);
  arc(-200, -95, 60, 40, radians(160), TWO_PI);
  arc(-200, -95, 50, 30, radians(170), TWO_PI);
  arc(-200, -95, 45, 23, radians(150), TWO_PI);

  //right part

  arc(-100, -95, 70, 70, PI, radians(15));
  arc(-95, -95, 75, 60, PI, radians(15));
  arc(-91, -95, 75, 60, PI, radians(15));
  arc(-90, -95, 70, 50, PI, radians(30));
  arc(-89, -95, 60, 40, PI, radians(45));
  arc(-85, -95, 60, 35, PI, radians(45));
  arc(-82, -95, 50, 30, PI, radians(45));
  arc(-78, -95, 50, 25, PI, radians(45));
  arc(-76, -95, 50, 20, PI, radians(45));

  /* end hair*/





  pop();


  /**************************/
  /*body*/
  /**************************/



  push();

  pop(); // BODY END!




}
