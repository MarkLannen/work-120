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
  push();
  strokeWeight(2);
  stroke(120);
  line( -40, 125, 250, -100);




  pop();


  /**************************/
  /*body*/
  /**************************/



  push();

  pop(); // BODY END!




}
